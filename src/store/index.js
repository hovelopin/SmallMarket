import ReduxThunk from "redux-thunk"
import reducer from "./reducers/index"
import { createStore, applyMiddleware } from "redux"

const store = createStore(reducer, applyMiddleware(ReduxThunk))

export default store
