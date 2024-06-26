import React, { useState } from "react";

const Example = () => {
  const [counter, setCounter] = useState(0);

  const doubleArray = [1,2,3].map((item) => item * 2);
  console.log(doubleArray);

  const add = function(a) {
    return function(b) {
      return a + b;
    }
  }
  console.log(add(10)(20));

  return (
    <div>
      <h1>{counter}</h1>
      {/* <button onClick={onClickCounterUp}>Function</button>
      <button onClick={onClickArrowCountUp}>Arrow Function</button> */}
    </div>
  );
}

export default Example;