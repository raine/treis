# treis

decorate functions with input and output logging

can be particularly useful when programming point-free style

```sh
$ npm install treis
```

## example

```js
var trace = require('treis');

var numbers = [1, 2, 3];
var add = function(a, b) {
  return a + b;
};

R.reduce(trace(add), 10, numbers); // => 16
```

```js
{ in: { '0': 10, '1': 1 }, out: 11 }
{ in: { '0': 11, '1': 2 }, out: 13 }
{ in: { '0': 13, '1': 3 }, out: 16 }
```

example from [ramda docs](http://ramdajs.com/docs)
