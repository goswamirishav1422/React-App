// import { createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import combineReducers from "./rootReducer";

// const store = createStore(combineReducers);
const store = configureStore({reducer:combineReducers})
export default store;
