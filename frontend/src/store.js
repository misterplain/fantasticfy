import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { collectionReducer } from "./reducers/collectionReducer";
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  collection: collectionReducer,
  product: productReducer
  
});

const initialState = {};

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
