import { useReducer, createContext, useEffect } from "react"
import authReducer from "@/context/reducer/authReducer"
import AuthTypes from "@/context/types/authRequestType"
import AuthService from "@/service/authService"

export const AuthStateContext = createContext(null)
export const DispatchContext = createContext(null)

const AuthContext = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        user: null,
    })

    useEffect(() => {
        fetchUserInformation()
    }, [])

    const fetchUserInformation = () => {
        try {
            const user = AuthService.firebaseCurrentUserReuqest()
            dispatch({
                type: AuthTypes.current,
                payload: user,
            })
        } catch (e) {
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
