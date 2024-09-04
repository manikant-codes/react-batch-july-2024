import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./slices/mobileSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});
