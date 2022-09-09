class Validation {
    static validateEmail(email) {
        if (email.includes(" ")) return false
        const isValid = email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        if (!isValid) return false
        return true
    }

    static validatePassword(password) {
        if (password.includes(" ")) return false
        const isValid = password.match(
            /^[A-Za-z0-9`~!@#$%^&*|\\\'\";:\/?]{8,15}$/
        )
        if (!isValid) return false
        return true
    }
}

Object.freeze(Validation)
export default Validation
