import { combineReducers, createStore } from "redux";
import {userReducer} from "react";

const rootReducer = combineReducers({
    userReducer: userReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());