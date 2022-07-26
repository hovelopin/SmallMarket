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

export default AuthService
Object.freeze(AuthService)
