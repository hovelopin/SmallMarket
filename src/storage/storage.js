class Storage {}

Storage.KEY = "CARTITEMS"

// localstorage에는 cart의 정보만 담도록 한다.
Storage.addStorageItem = function (item) {
    localStorage.setItem(Storage.KEY, item)
}

Storage.getStorageItem = function () {
    return localStorage.getItem(Storage.KEY)
}

Storage.clearStorage = function () {
    localStorage.clear()
}

Object.freeze(Storage)
export default Storage
