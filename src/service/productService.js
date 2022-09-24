import { doc, addDoc, setDoc, getDocs, collection } from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import ImageService from "@/service/imageService"
import FoodItemType from "@/type/foodItemType"
import FoodItemListype from "@/type/foodItemListType"
import Data from "@/dev/data"
import ErrorUtil from "@util/errorUtil"

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
        categoryItems.push(craeteType(toUpper, p.data()))
    })
    const selectedItems = categoryItems.filter(
        (c) => c.category.category === toUpper
    )
    return FoodItemListype.createFoodItemListType(selectedItems)
        .$_foodItemListType
}

function craeteType(toUpper, productItemData) {
    const {
        uuid,
        name,
        description,
        price,
        quantity,
        img,
        sellerUuid,
        origin,
    } = productItemData
    switch (toUpper) {
        case "Drink":
            return FoodItemType.createDrink(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid,
                origin
            )

        case "Meat":
            return FoodItemType.createMeat(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid,
                origin
            )

        case "Vegetable":
            return FoodItemType.createVegetable(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid,
                origin
            )

        case "Normal":
            return FoodItemType.createNormal(
                uuid,
                name,
                description,
                price,
                quantity,
                img,
                sellerUuid,
                origin
            )

        default:
            ErrorUtil.notImplemented()
    }
}

Object.freeze(ProductService)
export default ProductService
