import NameUtil from "../util/nameUtil"
import Cookies from "universal-cookie"
import ErrorUtil from "../util/errorUtil"

const cookies = new Cookies()
const ACCESS_TOKEN = "SM_ACCESS_TOKEN"

class CookieStorage extends NameUtil {
    constructor() {
        super("CookieStorageType")

        NameUtil.freezeObject(this, CookieStorage)
    }
}

// samesite option
CookieStorage.saveAccessToken = function (accessToken) {
    ErrorUtil.invalidParameter(accessToken)
    cookies.set(ACCESS_TOKEN, accessToken, { sameSite: "strict" })
}

CookieStorage.checkUserToken = function () {
    return cookies.get(ACCESS_TOKEN)
}

CookieStorage.clearToken = function () {
    cookies.remove(ACCESS_TOKEN)
}

export default CookieStorage
