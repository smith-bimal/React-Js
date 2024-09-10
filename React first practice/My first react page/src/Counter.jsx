import { useState } from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

  function incCounter() {
    if (count < 20) {
     return setCount((prevVal)=>prevVal+1);
    } else {
     return setCount(count);
    }
  }

  function decCounter() {
    if (count > 0) {
     return setCount((prevVal)=>prevVal-1);
    } else {
     return setCount(count);
    }
  }

  return (
  <>
  <h3>Value: {count}</h3>
  <button onClick={incCounter}>Increase</button>
  <button onClick={decCounter}>Decrease</button>
  </>
);
}
