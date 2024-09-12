import { TextInput } from "flowbite-react/components/TextInput";
import { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [value, setValue] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const countRef = useRef(0);
  const valueRef = useRef("");

  console.log("ref", countRef);

  function handleChange(e) {
    setValue(e.target.value);
  }

  console.log("Rendered");

  useEffect(() => {
    // setRenderCount(renderCount + 1);
    countRef.current += 1;
    valueRef.current = value;
    console.log(countRef);
  }, [value]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 p-4 bg-orange-200 rounded-md">
          <TextInput value={value} onChange={handleChange} />
          {/* <p>{renderCount}</p> */}
          <p>{countRef.current}</p>
          <p>Previous value: {valueRef.current}</p>
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo;
