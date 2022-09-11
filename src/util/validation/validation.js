class Validation {
    static validateUsername(username) {
        if (isIncludesSpace(username)) return false
        return username.length > 4 ? true : false
    }

    static validateEmail(email) {
        if (isIncludesSpace(email)) return false
        const isValid = email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        if (!isValid) return false
        return true
    }

    static validatePassword(password) {
        if (isIncludesSpace(password)) return false
        const isValid = password.match(
            /^[A-Za-z0-9`~!@#$%^&*|\\\'\";:\/?]{8,15}$/
        )
        if (!isValid) return false
        return true
    }

    static validateAll(infoArr) {
        return infoArr.every((info) => info === true)
    }
}

function isIncludesSpace(str) {
    if (str.includes(" ")) return true
    return false
}

Object.freeze(Validation)
export default Validation
