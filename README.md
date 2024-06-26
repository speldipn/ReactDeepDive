# React Deep Dive

LAMP(Linux + Apache + MySQL + PHP)

### Performance optimizing

Douple Buffering

### History 

- BoltJS -> FBolt
- Facebook spartan project

## JS

== vs. Object.is
  - == (type casting)
  - Object.is (equal ===)

== vs. Object.is
```js
-0 === +0 // true
Object.is(-0, +0) // false

Number.NaN === NaN // false
Object.is(Number.NaN, NaN) // true

NaN === 0 / 0 // false
Object.is(NaN, 0 / 0) // true
```

### ES6

function vs arrow function
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

- passing parameter
- return function

```js
  const add = function(a) {
    return function(b) {
      return a + b;
    }
  }
```