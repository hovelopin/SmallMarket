import { useReducer, createContext, useEffect } from "react"
import authReducer from "@/context/reducer/authReducer"
import AuthTypes from "@/context/types/authRequestType"
import Data from "@/dev/data"

export const AuthStateContext = createContext(null)
export const DispatchContext = createContext(null)

const AuthContext = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        user: null,
    })

    useEffect(() => {
        fetchUserInformation()
    }, [])

    const fetchUserInformation = async () => {
        try {
            const user = await Data.loginRequest()
            dispatch({
                type: AuthTypes.login,
                payload: user,
            })
        } catch (e) {
            // 에러상황 처리
            console.error(e)
        }
    }

    return (
        <DispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={authState}>
                {children}
            </AuthStateContext.Provider>
        </DispatchContext.Provider>
    )
}

export default AuthContext
