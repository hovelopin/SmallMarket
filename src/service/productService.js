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

ProductService.firebaseGetCategoryRequest = async function (
    categoryType,
    searchName
) {
    const productDocs = await getDocs(collection(firestore, "product"))
    const categoryItems = []
    productDocs.forEach((p) => {
        categoryItems.push(FoodItemType.craeteType(p.data()))
    })
    if (searchName) {
        const searchedItem = categoryItems.filter((c) => {
            if (c.name.toUpperCase().includes(searchName.toUpperCase()))
                return c
        })
        if (!searchedItem.length) return []
        return FoodItemListype.createFoodItemListType(searchedItem)
            .$_foodItemListType
    }
    if (!categoryType)
        return FoodItemListype.createFoodItemListType(categoryItems)
            .$_foodItemListType
    const selectedItems = categoryItems.filter((c) => {
        if (c.category.category.toUpperCase() === categoryType.toUpperCase())
            return c
    })
    return FoodItemListype.createFoodItemListType(selectedItems)
        .$_foodItemListType
}

ProductService.firebaseProductInformationByIdReuqest = async function (uuid) {
    const q = query(
        collection(firestore, "product"),
        where("uuid", "==", `${uuid}`)
    )
    const queryResult = await getDocs(q)
    const find = []
    queryResult.docs.forEach((item) => {
        find.push(item.data())
    })
    return find
}

ProductService.firebaseGetSellerProductItemRequest = async function (uuid) {
    const q = query(
        collection(firestore, "product"),
        where("sellerUuid", "==", `${uuid}`)
    )
    const querySnapshot = await getDocs(q)
    const sellerItem = []
    querySnapshot.docs.forEach((item) => {
        sellerItem.push(item.data())
    })
    return sellerItem
}

Object.freeze(ProductService)
export default ProductService
