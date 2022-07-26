import {
    USER_LOGIN,
    REGISTER_USER,
    REGISTER_ERROR,
    USER_LOGIN_FAIL,
} from "../actionTypes/auth/authActionTypes"
import AuthService from "../../service/authService"

export const registerRequest =
    (username, password, email, name) => async (dispatch) => {
        try {
            const data = await AuthService.registerRequest(
                username,
                password,
                email,
                name
            )
            dispatch({
                type: REGISTER_USER,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: REGISTER_ERROR,
                payload: error.response,
            })
        }
    }

export const loginRequest = (username, password) => (dispatch) => {
    try {
        const data = AuthService.loginRequest(username, password)
        dispatch({
            type: USER_LOGIN,
            payload: data,
        })
        return data
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message,
        })
    }
}

export function logoutRequest() {
    AuthService.logout()
}
