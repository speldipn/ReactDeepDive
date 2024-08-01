import React, { memo, useState } from 'react';

export default function A() {
  return (
    <div className='App'>
      <h1>Hello React!</h1>
      <B />
    </div>
  );
}

export function B() {
  const [counter, setCounter] = useState(0);

  function handlerButtonClick() {
    setCounter(prev => prev + 1);
  }

  return (
    <>
      <label>
        <C number={counter} />
      </label>
      <button onClick={handlerButtonClick}>+</button>
    </>
  );
}

export function C({ number }) {
  return (
    <div>
      {/* {number} <D /> */}
      {number} <MemoizedD />
    </div>
  );
}


function D() {
  return <>React is fun!</>
}

const MemoizedD = memo(D);