import AuthTypes from "@/context/types/authRequestType"
import ErrorUtil from "@util/errorUtil"

function authReducer(auth, action) {
    switch (action.type) {
        case AuthTypes.login:
            return {
                ...auth,
                user: action.payload,
            }

        case AuthTypes.logout:
            return {
                ...auth,
                user: action.payload,
            }

        default:
            ErrorUtil.notImplemented()
    }
}

export default authReducer
