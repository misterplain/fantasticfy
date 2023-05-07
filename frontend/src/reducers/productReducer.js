import { SET_PRODUCT, CLEAR_PRODUCT } from "../constants/productConstants";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        body_html: action.payload.body_html,
        title: action.payload.title,
        id: action.payload.id,
        image: action.payload.image,
        images: action.payload.images,
        options: action.payload.options,
        variants: action.payload.variants,
      };
    case CLEAR_PRODUCT:
      return { product: null };
    default:
      return state;
  }
};
