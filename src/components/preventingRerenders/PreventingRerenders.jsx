import React, { useCallback, useState } from "react";
import ListComponent from "./ListComponent";

function PreventingRerenders() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Task"]);

  const addTask = useCallback(
    function () {
      setList([...list, "Task"]);
    },
    [list]
  );

  function increase() {
    setCount(count + 1);
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="flex items-center gap-4 bg-green-200 p-4">
        <p className="text-xl">Count: {count}</p>
        <button
          onClick={increase}
          className="bg-green-700 px-4 py-2 rounded text-white"
        >
          Increment
        </button>
      </div>
      <ListComponent list={list} addTask={addTask} />
    </div>
  );
}

export default PreventingRerenders;
