import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
} from "../constants/collectionConstants";

export const collectionReducer = (state = { }, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_REQUEST:
      return { loading: true, error: false, collection: [] };
    case FETCH_COLLECTIONS_SUCCESS:
      return { loading: false, collection: action.payload };
    case FETCH_COLLECTIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
