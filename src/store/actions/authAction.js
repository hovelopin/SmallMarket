import UserActionTypes from "@/store/types/userActionTypes"
import Data from "@/dev/data"
import CookieStorage from "@/storage/cookieStorage"

export const authUserStateRequestAction = () => async (dispatch) => {
    dispatch({
        type: UserActionTypes.REQUEST_USER_STATE,
    })
}

export const authLoginReuqestAction = (email, password) => async (dispatch) => {
    // firebase 연동시 .then.catch로 묶는다.
    try {
        const data = await Data.loginRequest(email, password)
        if (data) {
            CookieStorage.setItem(data.accessToken)
            dispatch({
                type: UserActionTypes.REQUEST_USER_LOGIN,
                payload: data,
            })
        }
    } catch (e) {
        dispatch({
            type: UserActionTypes.REQUEST_USER_LOGIN_FAIL,
            payload: e.message,
        })
    }
}
