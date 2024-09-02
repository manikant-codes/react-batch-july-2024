import { Button } from "flowbite-react";
import React, { memo, useState } from "react";

function TasksList({ list, handleAddTask }) {
  console.log("List Rendered");

  return (
    <div className="p-4 bg-orange-200 rounded-md">
      <ul className="flex flex-col gap-4">
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value} {index + 1}
            </li>
          );
        })}
      </ul>
      <Button onClick={handleAddTask} className="mt-8">
        Add Task
      </Button>
    </div>
  );
}

export default memo(TasksList);
