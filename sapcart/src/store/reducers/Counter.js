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
    addToCart: (state, actions) => {
      const newItem = { ...actions.payload };
      const checkItem = state.item.find(
        (element) => element["key"] === newItem["key"]
      );
      if (checkItem) {
        alert("Item udah ada bangsat");
      } else {
        state.value += 1;
        state.item.push(newItem);
      }
    },
    removeFromCart: (state, actions) => {
      const itemToRemove = actions.payload;
      state.item = state.item.filter((item) => item["key"] !== itemToRemove);
      state.value -= 1;
    },
  },
});

export const { increment, decrement, addToCart, removeFromCart } =
  Counter.actions;

export default Counter.reducer;
