
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./06-11-2026/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
