import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: Date.now(), title: "Task", isCompleted: false }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((value) => {
        if (value.id === action.payload) {
          return { ...value, isCompleted: !value.isCompleted };
        }
        return value;
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((value) => {
        if (value.id === action.payload) return false;
        return true;
      });
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
