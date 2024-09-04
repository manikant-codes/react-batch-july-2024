import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: "mobile",
  initialState: { numberOfMobiles: 10 },
  reducers: {
    buyMobile: (state, action) => {
      state.numberOfMobiles -= action.payload;
    },
    restockMobile: (state, action) => {
      state.numberOfMobiles += action.payload;
    },
  },
});

export const { buyMobile, restockMobile } = mobileSlice.actions;

export const mobileReducer = mobileSlice.reducer;
