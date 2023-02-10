import { useEffect } from "react";
import CounterContainer from "./CounterContainer";

const Example = () => {
  const counter = CounterContainer.useContainer();
  useEffect(() => {
    console.log(counter.count);
  }, [counter.count]);

  return <div>hi</div>;
};

export default Example;
