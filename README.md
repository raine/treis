# treis

simple debugging tool. decorates functions with
[colored](https://raw.githubusercontent.com/raine/treis/media/img.png) input
and output logging

can be particularly useful when programming in point-free style

```sh
$ npm install treis
```

## usage

### `treis([name], fn)`

returns a decorated version of `fn` that prints the given arguments and
return value of `fn`

you can optionally label functions by passing a name before the function
to be decorated

writes to `stderr`

## example

```js
var trace = require('treis');

var numbers = [1, 2, 3];
var add = function(a, b) {
  return a + b;
};

R.reduce(trace(add), 10, numbers); // => 16
```

#### output

```js
{ in: { '0': 10, '1': 1 }, out: 11 }
{ in: { '0': 11, '1': 2 }, out: 13 }
{ in: { '0': 13, '1': 3 }, out: 16 }
```

example taken from [ramda docs](http://ramdajs.com/docs)
