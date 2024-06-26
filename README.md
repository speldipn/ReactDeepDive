# React Deep Dive

LAMP(Linux + Apache + MySQL + PHP)

### Performance optimizing
Douple Buffering

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

