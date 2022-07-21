import ErrorUtil from "./errorUtil"

class NameUtil {
    constructor(type) {
        ErrorUtil.invalidParameter(type)
        this.type = type
    }
}

NameUtil.freezeObject = function (obj, _class) {
    if (obj === _class) {
        Object.freeze(obj)
    }
}

Object.freeze(NameUtil)
export default NameUtil
