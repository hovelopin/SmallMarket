import {
    GET_ITEMS,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAIL,
    GET_ITEMS_DETAILS,
    GET_ITEMS_DETAILS_SUCCESS,
    GET_ITEMS_DETAILS_FAIL,
    GET_ITEMS_DETAILS_RESET,
} from "../actionTypes/item/itemActionTypes"
import Data from "../../dev/data"

const baseURL = process.env.REACT_APP_BASE_URL

export const getItems = () => async (dispatch) => {
    // 현재는 TestData로 진행하도록 한다.
    try {
        dispatch({ type: GET_ITEMS })
        // MeatType으로 일단 가져오도록 한다.
        const items = Data.createMeatItemData().$_foodItemListType
        dispatch({
            type: GET_ITEMS_SUCCESS,
            payload: items,
        })
    } catch (error) {
        dispatch({
            type: GET_ITEMS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getItemDetails = (itemId) => async (dispatch) => {
    try {
        dispatch({ type: GET_ITEMS_DETAILS })
        const detailItem = Data.createMeatItemData().$_foodItemListType[itemId]
        dispatch({
            type: GET_ITEMS_DETAILS_SUCCESS,
            payload: detailItem,
        })
    } catch (error) {
        dispatch({
            type: GET_ITEMS_DETAILS_FAIL,
            payload: error,
        })
    }
}

export const removeItemDetail = () => async (dispatch) => {
    dispatch({
        type: GET_ITEMS_DETAILS_RESET,
    })
}
