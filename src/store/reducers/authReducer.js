import UserActionTypes from "@/store/types/userActionTypes"

const INITIAL_STATE = {
    user: {
        accessToken: "",
        refreshToken: "",
        fetchOption: {
            uuid: "",
        },
    },
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.REQUEST_USER_STATE:
            return {
                ...state,
            }

        case UserActionTypes.REQUEST_USER_LOGIN:
            return {
                ...state,
                user: action.payload,
            }

        case UserActionTypes.REQUEST_USER_LOGIN_FAIL:
            return {
                error: action.payload,
            }

        default:
            return state
    }
}

export default authReducer
