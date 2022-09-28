import {
    createUserWithEmailAndPassword,
    getAuth,
    setPersistence,
    browserSessionPersistence,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"
import {
    doc,
    addDoc,
    setDoc,
    getDocs,
    collection,
    query,
    where,
    updateDoc,
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
    try {
        const auth = getAuth()
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        const find = await AuthService.firebaseGetUserInformationById(user.uid)
        if (find.isUnregister) return false
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
    if (!SessionStorage.getItem()) return false
    const userUuid = SessionStorage.getItem().uid
    const userInfo = []

    const q = query(
        collection(firestore, "user"),
        where("uuid", "==", userUuid)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.docs.forEach((item) => {
        userInfo.push(item.data())
    })

    return userInfo[0]
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
    await signOut(auth)
    SessionStorage.clear()
    const userRef = doc(firestore, "user", `${uuid}`)
    await updateDoc(userRef, {
        isUnregister: true,
    })
}

AuthService.firebaseAdminUserRequest = async function (status, uuid) {
    switch (status) {
        case "Delete":
            await AuthService.firebaseUserDeleteRequest(uuid)
            return true
        default:
            ErrorUtil.notImplemented()
    }
    return false
}

AuthService.firebaseGetUserInformationById = async function (uuid) {
    const q = query(
        collection(firestore, "user"),
        where("uuid", "==", `${uuid}`)
    )
    const qeuryRes = await getDocs(q)
    const find = []
    qeuryRes.docs.forEach((user) => {
        find.push(user.data())
    })
    return find[0]
}

AuthService.firebaseEditInfoRequest = async function (username) {
    const user = SessionStorage.getItem().uid
    if (user) {
        const userRef = doc(firestore, "user", user)
        await updateDoc(userRef, {
            username: username,
        })
        await AuthService.firebaseLogoutRequest()
        return true
    }
    return false
}

export default AuthService
Object.freeze(AuthService)
