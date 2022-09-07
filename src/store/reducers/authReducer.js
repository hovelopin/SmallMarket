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
        default:
            return state
    }
}

export default authReducer
