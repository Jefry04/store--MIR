import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/Products.reducer";
import productDetail from "./reducers/ProductDetail.reducer";

const rootReducer = combineReducers({
    productsReducer,
    productDetail,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);