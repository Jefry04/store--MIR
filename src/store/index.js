import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/Products.reducer";

const rootReducer = combineReducers({
    productsReducer
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);