import { combineReducers } from "redux"
import authReducer from "./authReducer"

const reducer = combineReducers({
    user: authReducer,
})

export default reducer
