# treis

it's a simple debugging tool. plug it into any function to see what goes in
and comes out.

can be particularly useful when programming in point-free style

![](https://raw.githubusercontent.com/raine/treis/media/img.png)

```sh
$ npm install treis
```

## usage

### `treis(fn)`
### `treis(name, fn)`

returns a decorated version of `fn` that prints the given arguments and
return value of `fn`

you can optionally label functions by passing a name before the function
to be decorated

writes to `stderr`

## example

```js
var R = require('ramda');
var trace = require('treis');

var numbers = [1, 2, 3];
var add = function(a, b) {
  return a + b;
};

trace('reduce', R.reduce)(trace('add', add), 10, numbers); // => 16
```

#### output

![](https://raw.githubusercontent.com/raine/treis/media/img2.png)

example taken from [ramda docs](http://ramdajs.com/docs)
