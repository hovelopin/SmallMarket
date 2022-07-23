import Storage from "../../storage/storage"
import {
    ADD_CART,
    REMOVE_CART,
    RESET_CART,
} from "../actionTypes/cart/cartActionTypes"

export const addCart = (item, quantity) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_CART,
            payload: {
                uuid: item.uuid,
                name: item.name,
                img: item.img,
                price: item.price,
                quantity: quantity,
            },
        })
        Storage.setItem(JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log(error)
    }
}

export const removeCart = (uuid) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART,
        payload: uuid,
    })
    Storage.setItem(JSON.stringify(getState().cart.cartItems))
}

export const resetCart = () => (dispatch) => {
    dispatch({
        type: RESET_CART,
        payload: [],
    })
    Storage.clearStorage()
}
