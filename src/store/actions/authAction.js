import UserActionTypes from "@/store/types/userActionTypes"
import Data from "@/dev/data"

export const authUserStateRequestAction = () => async (dispatch) => {
    dispatch({
        type: UserActionTypes.REQUEST_USER_STATE,
    })
}

export const authLoginReuqestAction = (email, password) => async (dispatch) => {
    try {
        const data = await Data.loginRequest(email, password)
        dispatch({
            type: UserActionTypes.REQUEST_USER_LOGIN,
            payload: data,
        })
    } catch (e) {
        dispatch({
            type: UserActionTypes.REQUEST_USER_LOGIN_FAIL,
            payload: e.message,
        })
    }
}
