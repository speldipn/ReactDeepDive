import React, { useState } from "react";

// type Hello = Record<'hello' | 'hi', string>;
type Hello = {
  [key in "hi" | "hello"]: string;
};

const hello: Hello = {
  hello: "hello",
  hi: "hi",
};

// const values = Object.keys(hello).map(key => {
//   const v = hello[key];
//   return v;
// });

// const values = (Object.keys(hello) as Array<keyof Hello>).map(key => hello[key]);

// const values = Object.keys((key) => {
//   const v = hello[key as keyof Hello];
//   return v;
// });

function keysOf<T extends Object>(obj: T): Array<keyof T> {
  return Array.from(Object.keys(obj)) as Array<keyof T>;
}

const values = keysOf(hello).map((key) => hello[key]);
console.log(values, values.length);

const Example = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((n) => n + 1)}>Plus</button>
      <button onClick={() => setCounter((n) => n - 1)}>Minus</button>
    </div>
  );
};

export default Example;
