import {
    doc,
    addDoc,
    setDoc,
    getDocs,
    collection,
    query,
    where,
} from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import ImageService from "@/service/imageService"
import FoodItemType from "@/type/foodItemType"
import FoodItemListype from "@/type/foodItemListType"

const ProductService = {}

ProductService.type = "ProductServiceType"

ProductService.firebaseAddToCartRequeset = async function (item, userUuid) {
    const cartDocs = collection(firestore, "cart")
    const cartQuery = query(cartDocs, where("userUuid", "==", `${userUuid}`))
    const carts = await getDocs(cartQuery)
    const cartArray = []
    carts.docs.forEach((cart) => {
        cartArray(cart)
    })
    const res = cartArray.find((cart) => cart.productUuid === item.uuid)
    if (res) return false
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
        categoryItems.push(FoodItemType.craeteType(p.data()))
    })
    const selectedItems = categoryItems.filter((c) => {
        if (c.category.category.toUpperCase() === toUpper.toUpperCase()) {
            return c
        }
    })
    return FoodItemListype.createFoodItemListType(selectedItems)
        .$_foodItemListType
}

Object.freeze(ProductService)
export default ProductService
