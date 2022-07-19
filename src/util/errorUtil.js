const ErrorUtil = {}

ErrorUtil.invalidParameter = function (param) {
    if (!param) {
        console.log(`${param} must be exist!!!`)
        debugger
    }
}

ErrorUtil.notImplemented = function () {
    console.log("Not implemented!!!")
    debugger
}

ErrorUtil.typeCheck = function (param, type) {
    if (param !== type) {
        console.log(`${param} must same ${type}!!!`)
        debugger
    }
}

ErrorUtil.instanceCheck = function (param, instance) {
    if (!(param instanceof instance)) {
        console.log(`${param} is not ${instance}`)
        debugger
    }
}

Object.freeze(ErrorUtil)
export default ErrorUtil
