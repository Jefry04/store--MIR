import axios from "axios";

const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";
const PRODUCTS_LOADING = "PRODUCTS_LOADING";

const initialState = {
  products: [],
};

export const getProucts = () => {
  return function (dispatch) {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
    });
  };
};

const productsReducer = (state = initialState, action) => {
  if (action.type === PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  } else {
    return state;
  }
};

export default productsReducer;
