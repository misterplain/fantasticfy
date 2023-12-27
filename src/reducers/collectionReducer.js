import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
} from "../constants/collectionConstants";

export const collectionReducer = (state = { }, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_REQUEST:
      return { loadingCollection: true, errorCollection: false, collectionData: [] };
    case FETCH_COLLECTIONS_SUCCESS:
      return { loadingCollection: false, collectionData: action.payload };
    case FETCH_COLLECTIONS_FAIL:
      return { loadingCollection: false, errorCollection: action.payload };
    default:
      return state;
  }
};
