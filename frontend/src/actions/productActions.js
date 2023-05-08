import { SET_PRODUCT, CLEAR_PRODUCT } from "../constants/productConstants";

export const setProduct = (productId) => async (dispatch, getState) => {
  const collectionState = getState().collection;
  const { loadingCollection, errorCollection, collectionData } =
    collectionState;
  const productsCollection = collectionData?.products;
  console.log("set products accessed");
  const product = productsCollection?.find(
    (product) => product.id === productId
  );

  dispatch({
    type: SET_PRODUCT,
    payload: product,
  });
};
