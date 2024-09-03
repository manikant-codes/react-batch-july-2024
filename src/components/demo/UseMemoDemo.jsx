import { Button } from "flowbite-react";
import React, { useCallback, useMemo, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import TasksList from "./TasksList";

const expensiveCalculation = (count) => {
  for (let i = 0; i < 1000000000; i++) {
    count += 1;
  }
  return count;
};

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Task"]);

  //   const calculation = expensiveCalculation(count);

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

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
        <p className="text-2xl">{calculation}</p>
        <Button onClick={handlePlus}>
          <HiPlus />
        </Button>
      </div>
      <TasksList list={list} handleAddTask={handleAddTask} />
    </div>
  );
}

export default UseMemoDemo;
