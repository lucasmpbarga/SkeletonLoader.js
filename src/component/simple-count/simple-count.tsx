"use client";
import { useRef, useState } from "react";
import Child from "./child";
import ChildMemo from "./child-memo";

export default function SimpleCount() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  renders.current += 1;
  console.log("Component renderizou!");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementMultiple = () => {
    setCount(count + 1); // 0 + 1 = 1
    setCount((prevState) => prevState + 2); // 1 + 2 = 3
    setCount(count + 5); // 0 + 5 = 5
    setCount((prevState) => prevState + 10); // 5 + 10 = 15
  };

  const handleSetCount = () => {
    setCount(0);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col text-3xl">
        <p>Count: {count}</p>
        <p>Renders: {renders.current}</p>
      </div>
      <div className="flex flex-col w-60 mt-4 text-xl">
        <button className="p-2 bg-green-500" onClick={handleIncrement}>
          Increment Count
        </button>
        <button
          className="p-2 bg-green-500 mt-4"
          onClick={handleIncrementMultiple}
        >
          Increment Multiple
        </button>
        <button className="p-2 bg-blue-500 mt-4 mb-4" onClick={handleSetCount}>
          Set Count
        </button>
        <Child />
        <ChildMemo />
      </div>
    </div>
  );
}
