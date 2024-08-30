import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    increaseQty: (state, action) => {},
    decreaseQty: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
