import Data from "../dev/data"
import UserStorage from "../storage/userStorage"
import ErrorUtil from "../util/errorUtil"

const AuthService = {}

AuthService.type = "AuthServiceType"

AuthService.registerRequest = function (username, password, email, name) {
    ErrorUtil.notImplemented()
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
