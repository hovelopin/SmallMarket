import NameUtil from "../util/nameUtil"
import Cookies from "universal-cookie"
import ErrorUtil from "../util/errorUtil"

const cookies = new Cookies()
const REFRESH_TOKEN = "SM_REFRESH_TOKEN"

class CookieStorage extends NameUtil {
    constructor() {
        super("CookieStorageType")

        NameUtil.freezeObject(this, CookieStorage)
    }
}

// samesite option
CookieStorage.saveRefreshToken = function (refreshToken) {
    ErrorUtil.invalidParameter(refreshToken)
    cookies.set(REFRESH_TOKEN, refreshToken, { sameSite: "strict" })
}

CookieStorage.checkUserToken = function () {
    return cookies.get(REFRESH_TOKEN)
}

CookieStorage.clearToken = function () {
    cookies.remove(REFRESH_TOKEN)
}

export default CookieStorage
