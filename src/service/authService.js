import {
    createUserWithEmailAndPassword,
    getAuth,
    setPersistence,
    browserSessionPersistence,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
} from "firebase/auth"
import {
    doc,
    addDoc,
    setDoc,
    getDocs,
    deleteDoc,
    collection,
    query,
    where,
} from "firebase/firestore"
import { firestore } from "@/service/firebaseService"
import SessionStorage from "@/storage/sessionStorage"
import ErrorUtil from "@util/errorUtil"

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
            setDoc(
                doc(firestore, "seller", `${sellerDoc.id}`),
                {
                    uuid: sellerDoc.id,
                },
                { merge: true }
            )
        }
        await addDoc(collection(firestore, "cart"), {
            userUuid: user.uid,
        })
        return user
    } catch (e) {
        return e
    }
}

AuthService.firebaseLoginRequest = async function (email, password) {
    const auth = getAuth()
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        await setPersistence(auth, browserSessionPersistence)
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

AuthService.firebaseCurrentUserInfoRequest = async function () {
    const userUuid = SessionStorage.getItem().uid
    const userInfo = []

    const q = query(
        collection(firestore, "user"),
        where("uuid", "==", userUuid)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.docs.forEach((item) => {
        const { isSeller } = item.data()
        userInfo.push(isSeller)
    })

    return userInfo
}

AuthService.firebaseAllUserInformationRequest = async function () {
    const docs = await getDocs(collection(firestore, "user"))
    const users = []
    docs.forEach((user) => {
        users.push(user.data())
    })
    return users
}

AuthService.firebaseUserDeleteRequest = async function (uuid) {
    const auth = getAuth()
    const user = auth.currentUser
    await deleteDoc(doc(firestore, "user", `${uuid}`))
    deleteUser(user).then(() => {
        signOut()
        SessionStorage.clear()
    })
}

AuthService.firebaseAdminUserRequest = async function (status) {
    switch (status) {
        case "Delete":
        default:
            ErrorUtil.notImplemented()
    }
}

export default AuthService
Object.freeze(AuthService)
