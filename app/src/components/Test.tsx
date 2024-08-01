import React, { useEffect, useMemo, useState } from 'react';

const useMath = (n: number) => {
  const [double, setDouble] = useState(n * 2);
  const [triple, setTriple] = useState(n * 3);

  useEffect(() => {
    setDouble(n * 2);
    setTriple(n * 3);
  }, [n]);

  // return useMemo(() => ({ double, triple }), [double, triple]);
  return {double, triple};
}

const Test = () => {
  const [count, setCount] = useState(0);
  const value = useMath(0);

  useEffect(() => {
    console.log(value.double, value.triple);
  }, [value]);


  const increaseHandle = () => {
    setCount(p => p + 1);
  }

  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseHandle}>+</button>
    </div>
  );
}

export default Test;