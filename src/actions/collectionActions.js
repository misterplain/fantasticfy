import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
} from "../constants/collectionConstants";
import productsCollection from "../assets/products";

export const fetchCollections = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    console.log(productsCollection);

    const data = productsCollection;

    dispatch({
      type: FETCH_COLLECTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COLLECTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
