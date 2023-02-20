import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import articleReducer from "./reducers/article-reducer";
import reportReducer from "./reducers/report-reducer";
// import { firebaseConfig } from "./firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// initializeApp(firebaseConfig);
// export const db = getFirestore();

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const rootReducer = combineReducers({
  articleStore: articleReducer,
  reportStore: reportReducer,
});

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
