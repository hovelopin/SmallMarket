import { doc, addDoc, setDoc, collection } from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import ImageService from "@/service/imageService"
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

Object.freeze(ProductService)
export default ProductService
