import { SET_PRODUCT, CLEAR_PRODUCT } from "../constants/productConstants";

export const setProduct = (productId) => async (dispatch, getState) => {
  const collectionState = getState().collection;
  const { loading, error, collection } = collectionState;
  const productsCollection = collection?.products;

  const product = productsCollection?.find(
    (product) => product.id === productId
  );

  dispatch({
    type: SET_PRODUCT,
    payload: product,
  });
};