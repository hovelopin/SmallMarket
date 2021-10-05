import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducer';
import { cartReducer } from '../reducers/cartReducer';
import thunk from 'redux-thunk';

const cartLocalStorage = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : [];

const INIT_STATE = {
    cart: {
        cartItems: cartLocalStorage,
    }
}

const reducer = combineReducers({
    user: authReducer,
    cart: cartReducer,
});

const store = createStore(
    reducer,
    INIT_STATE, 
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;