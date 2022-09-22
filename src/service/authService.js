import {
    createUserWithEmailAndPassword,
    getAuth,
    setPersistence,
    browserSessionPersistence,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"
import { doc, addDoc, setDoc, getDocs, collection } from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import SessionStorage from "@/storage/sessionStorage"

const AuthService = {}

AuthService.type = "AuthServiceType"

AuthService.logoutRequest = function () {
    UserStorage.clear()
}

AuthService.firebaseRegiserRequest = async function (
    username,
    password,
    email,
    customerType
) {
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user
        await sendEmailVerification(user, {
            url: process.env.REACT_APP_SMV2,
            handleCodeInApp: true,
        })
        setDoc(doc(firestore, "user", user.uid), {
            uuid: user.uid,
            username: username,
            email: email,
            isAdmin: false,
            isSeller: customerType === "Seller" ? true : false,
        })
        if (customerType === "Seller") {
            const sellerDoc = await addDoc(collection(firestore, "seller"), {
                sellerUuid: user.uid,
                companyRegistrationNumber: "",
                address: "",
                selledLog: [""],
                tel: [""],
            })
            await setDoc(
                doc(firestore, "seller", `${sellerDoc.id}`),
                {
                    uuid: sellerDoc.id,
                },
                { merge: true }
            )
        }

        return user
    } catch (e) {
        return e
    }
}

AuthService.firebaseLoginRequest = async function (email, password) {
    const auth = getAuth()
    await setPersistence(auth, browserSessionPersistence)
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (e) {
        return false
    }
}

AuthService.firebaseCurrentUserReuqest = function () {
    return SessionStorage.getItem()
}

AuthService.firebaseLogoutRequest = async function () {
    const auth = getAuth()
    signOut(auth)
    SessionStorage.clear()
}

AuthService.firebaseEmailCheckRequest = async function (userEmail) {
    const userDocs = await getDocs(collection(firestore, "user"))
    const res = []
    userDocs.forEach((user) => {
        const { email } = user.data()
        if (email === userEmail) res.push(email)
    })
    return res.length
}

// TODO: 회원탈퇴 추가

export default AuthService
Object.freeze(AuthService)
