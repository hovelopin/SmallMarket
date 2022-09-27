import axios from "axios"
import {
    getDocs,
    doc,
    addDoc,
    setDoc,
    collection,
    query,
    where,
} from "firebase/firestore"
import { firestore } from "@/service/firebaseService"

const PayService = {}

PayService.type = "PayServiceType"

PayService.paymentRequest = async function (url, params) {
    return axios.post(url, null, {
        params,
        headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_KEY}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
    })
}

PayService.firebaseGetPaymentRequest = async function (userUuid) {
    const q = query(
        collection(firestore, "payment"),
        where("userUuid", "==", userUuid)
    )
    const queryResult = await getDocs(q)
    const payments = []
    queryResult.docs.forEach((pay) => {
        payments.push(pay.data())
    })
    return payments
}

PayService.firebaseAddPaymentRequest = async function (
    items,
    userUuid,
    createdAt
) {
    items.forEach(async (item) => {
        const addedPayment = await addDoc(collection(firestore, "payment"), {
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
            createdAt: createdAt,
        })
        setDoc(
            doc(firestore, "payment", `${addedPayment.id}`),
            {
                uuid: addedPayment.id,
            },
            { merge: true }
        )
    })
}

PayService.firebaseGetSellerProductsRequest = async function (uuid) {
    const q = query(
        collection(firestore, "payment"),
        where("seller", "==", `${uuid}`)
    )
    const querySnapshot = await getDocs(q)
    const saleItems = []
    querySnapshot.forEach((item) => {
        saleItems.push(item.data())
    })
    return saleItems
}

Object.freeze(PayService)
export default PayService
