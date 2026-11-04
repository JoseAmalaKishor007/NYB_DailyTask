import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  count: 0
};

// Create Slice
const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    decrement: (state) => {
      state.count = state.count - 1;
    },

    reset: (state) => {
      state.count = 0;
    }
  }
});

// Export Actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export Reducer
export default counterSlice.reducer;