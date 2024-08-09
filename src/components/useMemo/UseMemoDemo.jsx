import { Button } from "flowbite-react";
import React, { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(
    function () {
      return expensiveCalculation(count);
    },
    [count]
  );

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <Button size="xs" pill onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <hr />
      <div>
        Count: {count}
        <Button size="xs" pill onClick={increment}>
          +
        </Button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default UseMemoDemo;
