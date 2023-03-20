import { configureStore, combineReducers } from "@reduxjs/toolkit";
import greetingReducer from "./reducer";

const store = configureStore({
  reducer: combineReducers({greeting: greetingReducer}), middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store