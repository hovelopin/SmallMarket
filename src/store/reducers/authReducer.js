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
        case "REQUEST_USER_LOGIN":
            return {
                ...state,
                user: action.payload,
            }

        case "REQUEST_USER_LOGIN_FAIL":
            return {
                error: action.payload,
            }

        default:
            return state
    }
}

export default authReducer
