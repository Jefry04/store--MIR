import axios from "axios";

const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";
const PRODUCTS_LOADING = "PRODUCTS_LOADING";

const initialState = {
  productDetails: {},
};

export const getProuctDetail = (id) => {
  return function (dispatch) {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
    });
  };
};

const productDetail = (state = initialState, action) => {
  if (action.type === PRODUCTS_SUCCESS) {
    return {
      ...state,
      productDetails: action.payload,
    };
  } else {
    return state;
  }
};

export default productDetail;
