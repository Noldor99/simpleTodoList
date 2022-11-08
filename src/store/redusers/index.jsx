import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
 
import thunk from "redux-thunk";
import allRedusers from "./allRedusers";

const rootReducer = combineReducers({
    todo: allRedusers,

})

export const store = createStore(rootReducer)