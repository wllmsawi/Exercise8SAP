import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  value: 0,
};

export const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToCart: (state, actions) => {},
  },
});

export const { increment, decrement, incresedByAmount } = Counter.actions;

export default Counter.reducer;