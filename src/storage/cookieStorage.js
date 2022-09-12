import Cookies from "universal-cookie"

const cookie = new Cookies()
const ACCESS_TOKEN = "ACCESSTOKEN"

class CookieStorage {
    static setItem(item) {
        cookie.set(ACCESS_TOKEN, item, { sameSite: "strict" })
    }

    static getItem() {
        return cookie.get(ACCESS_TOKEN)
    }

    static clear() {
        cookie.remove(ACCESS_TOKEN)
    }
}

Object.freeze(CookieStorage)
export default CookieStorage
