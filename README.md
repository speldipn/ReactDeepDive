# React Deep Dive

- LAMP(Linux + Apache + MySQL + PHP)

### Performance optimizing

- Douple Buffering

### History

- BoltJS -> FBolt
- Facebook spartan project

## JS

== vs. Object.is

- == (type casting)
- Object.is (equal ===)

== Vs. Object.is

```js
-0 === +0; // true
Object.is(-0, +0); // false

Number.NaN === NaN; // false
Object.is(Number.NaN, NaN); // true

NaN === 0 / 0; // false
Object.is(NaN, 0 / 0); // true
```

### ES6

Function vs Arrow function

- Cannot be used as a constructor.
- Arguments do not exist
- Function bind this to global, but Arrow function bind this to parent

### Immediately Invoked Function Expression

```js
(function (a: number, b: number) {
  console.log(`${a} ${b} called`);
})(10, 20);

((a: number, b: number) => console.log(a, b))(10, 20);
```

### Higher Order Function

- Passing parameter
- Return function

```js
const add = function (a) {
  return function (b) {
    return a + b;
  };
};
```

### Prototype Chaining

### JS running single thread

### Event Loop

- Include one task queue
- Priority: micro taskQ(process, nextTick, Promises, queueMicroTask, MutationObserver) > taskQ(setTimeout, setInterval, setImmediate)

### JSX

- JSXElement
- JSXAttributes
- JSXChildren
- JSXStrings

### Renderding

- Drawing ui to web browser
- But in react, rendering is building DOM tree

### React 18

- Sychronous rendering

### Memoization

- React.memo
- useMemo
- useCallback