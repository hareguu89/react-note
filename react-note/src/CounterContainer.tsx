import { useState } from "react";
import { createContainer } from "unstated-next";

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return { count, decrement, increment, reset };
}

export default createContainer(useCounter);
