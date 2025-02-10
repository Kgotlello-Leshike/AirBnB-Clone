import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { listingListReducer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducer";
import { userLoginReducer } from "./reducers/userReducer";


const reducer = combineReducers({
});

const initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;