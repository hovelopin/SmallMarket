import NameUtil from "../util/nameUtil"
import CookieStorage from "./cookieStorage"

class UserStroage extends NameUtil {
    constructor() {
        super("UserStroageType")

        NameUtil.freezeObject(UserStroage, this)
    }
}

UserStroage.save = function (accessToken) {
    CookieStorage.saveRefreshToken(accessToken)
}

UserStroage.getToken = function () {
    return CookieStorage.checkUserToken()
}

UserStroage.clear = function () {
    CookieStorage.clearToken()
}

export default UserStroage
