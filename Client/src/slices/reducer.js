import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer, bookSliceReducer } from "../slices/index.js";

const rootReducer = combineReducers({
    auth: authSliceReducer,
    book: bookSliceReducer
});

export default rootReducer;
