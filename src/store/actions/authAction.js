import Data from "@/dev/data"

export const authLoginReuqestAction = (email, password) => async (dispatch) => {
    try {
        const data = await Data.loginRequest(email, password)
        dispatch({
            type: "REQUEST_USER_LOGIN",
            payload: data,
        })
        return data
    } catch (e) {
        dispatch({
            type: "REQUEST_USER_LOGIN_FAIL",
            payload: e.message,
        })
    }
}
