import Child from "./child";
import Count from "./count";

export default function ParentRerender() {
  return (
    <div className="flex flex-col w-60 mt-4 text-xl p-2">
      <h1>Parent Rerenders</h1>
      <Count />
      <Child />
    </div>
  );
}
