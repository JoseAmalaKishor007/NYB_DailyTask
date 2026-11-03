
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReactRedux/counterSlice";

// Create Redux Store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
