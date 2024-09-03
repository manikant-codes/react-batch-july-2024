import { TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";

function UseRefDemo() {
  const [value, setValue] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [value]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4 bg-orange-200 rounded-md">
          <TextInput value={value} onChange={handleChange} />
          <p>{renderCount}</p>
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo;
