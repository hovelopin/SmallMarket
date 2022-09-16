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
        const user = await Data.loginRequest()
        dispatch({
            type: AuthTypes.login,
            payload: user,
        })
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
