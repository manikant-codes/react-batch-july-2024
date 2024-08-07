import { Button } from "flowbite-react";
import React, { memo } from "react";

function Todos({ list, handleAddTask }) {
  console.log("List Rendered");

  return (
    <div>
      <ul>
        {list.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
}

export default memo(Todos);
