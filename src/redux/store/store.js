import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { authReducer } from "../reducers/authReducer"
import { cartReducer } from "../reducers/cartReducer"
import { getItemReducer, getItemDetailReducer } from "../reducers/itemReducer"
import Storage from "../../storage/storage"
import thunk from "redux-thunk"

const reducer = combineReducers({
    user: authReducer,
    cart: cartReducer,
    getItems: getItemReducer,
    getItemDetails: getItemDetailReducer,
})

const middleware = [thunk]

const cartStorage = Storage.getStorageItem()
    ? JSON.parse(Storage.getStorageItem())
    : []

const INIT_STATE = {
    user: {
        accessToken: "",
        refreshToken: "",
        fetchOption: {
            uuid: "",
        },
    },
    cart: {
        cartItems: cartStorage,
    },
}

const store = createStore(
    reducer,
    INIT_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
