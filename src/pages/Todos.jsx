import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/slices/todosSlice";

function Todos() {
  const [task, setTask] = useState("");

  const todos = useSelector((store) => {
    return store.todos.todos;
  });

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addTodo({ id: Date.now(), title: task, isCompleted: false }));
    setTask("");
  }

  function handleDelete(id) {
    dispatch(removeTodo(id));
  }

  function handleChange(e, id) {
    dispatch(updateTodo(id));
  }

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleEnter(e) {
    console.log(e);
    if (e.keyCode === 13) {
      handleAdd();
    }
  }

  return (
    <div>
      <div className="px-8 py-4 bg-purple-700 text-white font-bold text-4xl flex gap-4 items-center">
        <h1 className="grow-[1]">Todo List</h1>
        <div class="flex items-center gap-2">
          <input
            className="block w-full appearance-none bg-white py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 rounded-md"
            placeholder="Add a task..."
            type="text"
            value={task}
            style={{ caretColor: "rgb(107, 114, 128)" }}
            onChange={handleTaskChange}
            onKeyDown={handleEnter}
          />
          <button
            className="pointer-events-auto rounded-md bg-purple-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-purple-500"
            onClick={handleAdd}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-4">
          {todos.map((todo, index) => {
            return (
              <li className="p-4 border border-purple-400 rounded-md bg-purple-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => {
                      handleChange(e, todo.id);
                    }}
                  />
                  <p className={`${todo.isCompleted ? "line-through" : ""}`}>
                    {todo.title}
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
      </div>
    </div>
  );
}

export default Todos;
