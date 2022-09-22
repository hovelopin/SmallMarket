const KEY = `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`

class SessionStorage {
    static getItem() {
        return JSON.parse(sessionStorage.getItem(KEY))
    }

    static setItem(item) {
        sessionStorage.setItem(KEY, item)
    }

    static clear() {
        sessionStorage.clear()
    }
}

Object.freeze(SessionStorage)
export default SessionStorage
