import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebaseService"
import Data from "../dev/data"
import UserStorage from "../storage/userStorage"

const AuthService = {}

AuthService.type = "AuthServiceType"

AuthService.registerRequest = function (username, password, email) {
    const newUser = {}
    newUser.username = username
    newUser.password = password
    newUser.email = email
    newUser.fetchOption = {}
    newUser.fetchOption.uuid = "DkAHffKD6dlF8EkSD4kaNrJ1sK"
    newUser.accessToken = "ACCESSTOKEN2"
    newUser.refreshToken = "REFRESHTOKEN2"
    Data.newUser = newUser
    UserStorage.save(Data.newUser.refreshToken)
    return Data.newUser
}

AuthService.loginRequest = function (username, password) {
    const serverData = {}
    serverData.username = Data.user.username
    serverData.password = Data.user.password
    if (username === serverData.username && serverData.password === password) {
        UserStorage.save(Data.user.refreshToken)
        return Data.user
    }
    return null
}

AuthService.logoutRequest = function () {
    UserStorage.clear()
}

// TODO: Test 필요
AuthService.firebaseRegiserRequest = async function (
    username,
    password,
    email
) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            const user = userCredential.user
            sendEmailVerification(user, {
                url: process.env.REACT_APP_SMV2,
                handleCodeInApp: true,
            })
            return user
        })
        .then((user) => {
            setDoc(doc(firestore, "user", user.uid), {
                uuid: user.uid,
                username: username,
                email: email,
            })
            const uObj = {}
            uObj.uuid = user.uid
            uObj.username = username
            uObj.email = email
            return uObj
        })
        .catch((error) => console.error(error))
}

AuthService.firebaseLoginRequest = async function (email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const uObj = {}
            uObj.uuid = user.uid
            uObj.token = user.accessToken
            uObj.refreshToken = user.refreshToken
            uObj.isEmailVerified = user.emailVerified
            return uObj.isEmailVerified === false ? null : uObj
        })
        .catch((error) => console.error(error))
}

AuthService.firebaseLogoutRequest = async function () {
    const auth = getAuth()
    signOut(auth).then(() => UserStorage.clear())
}

export default AuthService
Object.freeze(AuthService)
