# treis

it's a simple debugging tool. plug it into any function to see what goes in
and comes out.

can be particularly useful when programming in point-free style.

```js
treis('zipWith', R.zipWith)(repeatAndJoin, ABC, R.range(1, ABC.length + 1));
```

![](https://raw.githubusercontent.com/raine/treis/media/img4.png)

```sh
$ npm install treis
```

## usage

### `treis(fn)`
### `treis(name, fn)`

returns a decorated version of `fn` that prints the given arguments and
return value of `fn`.

you can optionally label functions by passing a name before the function
to be decorated, if not, treis will try to use `fn.name`.

writes to `stderr`

## example

```js
var R = require('ramda');
var treis = require('treis');

var numbers = [1, 2, 3];

function add(a, b) {
  return a + b;
}

treis('reduce', R.reduce)(treis(add), 10, numbers); // => 16
```

#### output

![](https://raw.githubusercontent.com/raine/treis/media/img3.png)

example taken from [ramda docs](http://ramdajs.com/docs)
