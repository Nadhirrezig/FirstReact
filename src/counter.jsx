import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
          Click ME
        </button>
        <h3>Count Is :{count}</h3>
    </>
  );
}
export default Counter;