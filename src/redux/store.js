import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./slices/mobileSlice";
import { todosReducer } from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
    todos: todosReducer,
  },
});
