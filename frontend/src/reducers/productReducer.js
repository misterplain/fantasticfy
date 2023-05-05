import { SET_PRODUCT, CLEAR_PRODUCT } from "../constants/productConstants";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { product: action.payload };
    case CLEAR_PRODUCT:
      return { product: null };
    default:
      return state;
  }
};
