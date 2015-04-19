# treis

a simple debugging tool.

plug it into any function to see what goes in and comes out without interfering with the return value.

can be particularly useful when programming in point-free style.

```js
var ABC = ['a', 'b', 'c', 'd', 'e', 'f'];
var repeatChar = R.compose(R.join(''), R.repeat);
treis(R.zipWith)(repeatChar, ABC, R.range(1, ABC.length + 1));
```

![](https://raw.githubusercontent.com/raine/treis/media/zipWith.png)

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

function greet(name) {
  return "Hello, " + name + '!';
}

var people = ['John', 'Jill', 'Bruce'];
var greetPeople = R.compose(R.forEach(console.log), R.map(treis(greet)));
treis(greetPeople)(people);
```

#### output

![](https://raw.githubusercontent.com/raine/treis/media/greet.png)

example taken from [ramda docs](http://ramdajs.com/docs)
