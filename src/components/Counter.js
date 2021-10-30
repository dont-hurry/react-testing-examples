import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((counter) => counter + 1);

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
};

export default Counter;
