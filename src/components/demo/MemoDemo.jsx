import React, { useCallback, useState } from "react";
import TasksList from "./TasksList";
import { Button } from "flowbite-react";
import { HiPlus, HiMinus } from "react-icons/hi";

function MemoDemo() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Task"]);

  const handleAddTask = useCallback(
    function () {
      setList([...list, "Task"]);
    },
    [list]
  );

  function handleMinus() {
    setCount(count - 1);
  }
  function handlePlus() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 p-4 bg-orange-200 rounded-md">
        <Button onClick={handleMinus}>
          <HiMinus />
        </Button>
        <p className="text-2xl">{count}</p>
        <Button onClick={handlePlus}>
          <HiPlus />
        </Button>
      </div>
      <TasksList list={list} handleAddTask={handleAddTask} />
    </div>
  );
}

export default MemoDemo;
