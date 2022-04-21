import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import articleReducer from "./reducers/article-reducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

const rootReducer = combineReducers({ articleStore: articleReducer });

// creating store
export const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
