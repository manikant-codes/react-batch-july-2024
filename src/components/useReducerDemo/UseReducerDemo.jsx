import React, { useReducer } from "react";

const initialState = [{ id: Date.now(), name: "Task", isCompleted: false }];

function reducer(todos, action) {
  // action -> {type: "ADD", payload: { id: Date.now(), name: "Task", isCompleted: false }}
  switch (action.type) {
    case "ADD": {
      const newTodos = [...todos, action.payload];
      return newTodos;
    }
    case "UPDATE":
      break;
    case "DELETE": {
      const newTodos = todos.filter((todo) => {
        if (todo.id === action.payload) return false;
        return true;
      });
      return newTodos;
    }
    default:
      return todos;
  }
}

function UseReducerDemo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: { id: Date.now(), name: "Task", isCompleted: false },
    });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <div>
      <h1 className="px-8 py-4 bg-purple-700 text-white font-bold text-4xl">
        Todo List
      </h1>
      <div className="p-8">
        <ul className="flex flex-col gap-4">
          {todos.map((todo, index) => {
            return (
              <li className="p-4 border border-purple-400 rounded-md bg-purple-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={todo.isCompleted} />
                  <p>
                    {todo.name} {todo.id}
                  </p>
                </div>
                <button
                  className="pointer-events-auto rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-500"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="pointer-events-auto rounded-md bg-purple-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-purple-500 mt-8"
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default UseReducerDemo;
