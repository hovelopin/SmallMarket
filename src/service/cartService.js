import {
    doc,
    getDocs,
    addDoc,
    setDoc,
    collection,
    query,
    where,
    deleteDoc,
} from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import FoodItemType from "@/type/foodItemType"

const CartService = {}

CartService.type = "CartServiceType"

CartService.firebaseCartInformationRequest = async function (userUuid) {
    const carts = await firebaseCartDocsRequest()
    if (!carts || !carts.length) return []
    const cartArr = []
    carts.forEach((cart) => {
        if (cart.userUuid === userUuid) {
            const productObj = cart.productUuid
                ? {
                      uuid: cart.productUuid,
                      name: cart.name,
                      description: cart.description,
                      price: cart.price,
                      quantity: cart.quantity,
                      img: cart.img,
                      seller: cart.seller,
                      origin: cart.origin,
                      category: cart.category,
                  }
                : null
            productObj && cartArr.push(FoodItemType.craeteType(productObj))
        }
    })
    return cartArr
}

CartService.firebaseAddToCartRequeset = async function (item, userUuid) {
    const originCart = await firebaseCartDocsRequest()
    if (!originCart) return false
    if (originCart.filter((oc) => oc.productUuid === item.uuid).length)
        return false
    const addedDoc = await addDoc(collection(firestore, "cart"), {
        userUuid: userUuid,
        productUuid: item.uuid,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        img: item.img,
        seller: item.seller,
        origin: item.origin,
        category: item.category.category,
    })
    setDoc(
        doc(firestore, "cart", `${addedDoc.id}`),
        {
            uuid: addedDoc.id,
        },
        { merge: true }
    )
    return true
}

CartService.firebaseCartDeleteItemRequest = async function (
    userUuid,
    productUuid
) {
    const q = query(
        collection(firestore, "cart"),
        where("userUuid", "==", userUuid),
        where("productUuid", "==", productUuid)
    )
    const queryRes = await getDocs(q)
    const res = []
    queryRes.docs.forEach((item) => {
        const { uuid } = item.data()
        res.push(uuid)
    })
    const [uuid] = res
    await deleteDoc(doc(firestore, "cart", `${uuid}`))
}

async function firebaseCartDocsRequest() {
    const carts = await getDocs(collection(firestore, "cart"))
    const cartArray = []
    carts.forEach((data) => {
        cartArray.push(data.data())
    })
    return cartArray
}

Object.freeze(CartService)
export default CartService
