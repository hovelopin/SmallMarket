import ErrorUtil from "./errorUtil"

class NameUtil {
    constructor(name) {
        ErrorUtil.invalidParameter(name)
        this.name = name
    }
}

NameUtil.freezeObject = function (obj, _class) {
    if (obj === _class) {
        Object.freeze(obj)
    }
}

Object.freeze(NameUtil)
export default NameUtil
