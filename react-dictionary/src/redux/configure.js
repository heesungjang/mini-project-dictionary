import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";
import { createBrowserHistory } from "history";
import { createStore, combineReducers, applyMiddleware } from "redux";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ dictionary });
const store = createStore(rootReducer, enhancer);

export default store;
