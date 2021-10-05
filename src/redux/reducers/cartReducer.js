import * as actionTypes from '../actionTypes/cart/cartActionTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.tpyes) {
    case actionTypes.ADD_CART:
      const item = action.payload;
      const currentItem = state.cartItems.find((target) => target.product === item.product);
      if(currentItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((target) => target.prouct ? item : target),
        }
      } else {
        return {
          ...state,
          cartItems: [ ...state.cartItems, item ],
        }
      }

    case actionTypes.REMOVE_CART:
      return {
        ...state,
        cartItems: [ ...state.cartItems, item ],
      }

    case actionTypes.RESET_CART:
      return state;

    default:
      return state;
  }
}