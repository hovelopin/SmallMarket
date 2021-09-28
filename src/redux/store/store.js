import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user: authReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;