import { doc, addDoc, setDoc, getDocs, collection } from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import ImageService from "@/service/imageService"
import FoodItemType from "@/type/foodItemType"
import Data from "@/dev/data"

const ProductService = {}

ProductService.type = "ProductServiceType"

ProductService.firebaseAddToCartRequeset = async function (item, userUuid) {
    if (Data?.cart[userUuid]?.includes(item)) return false
    Data.cart[userUuid]
        ? Data.cart[userUuid].push(item)
        : (Data.cart[userUuid] = [item])
    return true
}

ProductService.firebaseAddProductRequest = async function (
    userUuid,
    name,
    description,
    origin,
    price,
    quantity,
    category,
    imgSrc
) {
    try {
        const productImgUrl = await ImageService.firesotrageImageUploadRequest(
            userUuid,
            imgSrc
        )
        const addedDoc = await addDoc(collection(firestore, "product"), {
            name: name,
            description: description,
            origin: origin,
            price: price,
            img: productImgUrl,
            quantity: quantity,
            sellerUuid: userUuid,
            category: category,
        })
        await setDoc(
            doc(firestore, "product", `${addedDoc.id}`),
            {
                uuid: addedDoc.id,
            },
            { merge: true }
        )
        return true
    } catch (e) {
        return false
    }
}

ProductService.firebaseGetCategoryRequest = async function (categoryType) {
    const productDocs = await getDocs(collection(firestore, "product"))
    const toUpper = categoryType.replace(/^[a-z]/, (char) => char.toUpperCase())
    const categoryItems = []

    productDocs.forEach((p) => {
        const { category } = p.data()
        if (category === toUpper) {
            categoryItems.push(p.data())
        }
    })

    return categoryItems
}

Object.freeze(ProductService)
export default ProductService
