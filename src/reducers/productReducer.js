import {
  SET_PRODUCT,
  CLEAR_PRODUCT,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
} from "../constants/productConstants";

const initialState = {
  loadingProduct: false,
  errorProduct: null,
  productData: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        loadingProduct: false,
        errorProduct: null,
        productData: {
          body_html: action.payload.hasOwnProperty("body_html")
            ? action.payload.body_html
            : null,
          title: action.payload.title,
          id: action.payload.id,
          image: action.payload.image,
          images: action.payload.images,
          options: action.payload.options,
          variants: action.payload.variants,
        },
      };
    case CLEAR_PRODUCT:
      return { ...state, productData: null };
    case PRODUCT_LOADING:
      return { ...state, loadingProduct: true, errorProduct: null };
    case PRODUCT_ERROR:
      return { ...state, loadingProduct: false, errorProduct: action.payload };
    default:
      return state;
  }
};
