import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
} from "../constants/collectionConstants";
import axios from "../api/axios";

export const fetchCollections = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COLLECTIONS_REQUEST });

    const { data } = await axios.get("/products");

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
