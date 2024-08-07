import React, { useCallback, useState } from "react";
import Counter from "./Counter";
import Todos from "./Todos";

function Memo() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Task 1", "Task 2"]);

  const handleAddTask = useCallback(
    function () {
      setList([...list, `Task ${list.length + 1}`]);
    },
    [list]
  );

  console.log("Memo Rendered");

  return (
    <div className="flex flex-col gap-8">
      <Counter count={count} setCount={setCount} />
      <Todos list={list} handleAddTask={handleAddTask} />
    </div>
  );
}

export default Memo;
