
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReactRedux/counterSlice";

// Create Redux Store
const Store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default Store;
