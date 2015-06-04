# treis [![npm version](https://badge.fury.io/js/treis.svg)](https://www.npmjs.com/package/treis)

> treɪs | a simple tool to debug and observe functions

treis will answer the question "what arguments is this function called with and what does it return?"

can be particularly useful when programming in [point-free style](http://en.wikipedia.org/wiki/Tacit_programming).

if you want to know what a function does in the middle of a `compose` pipeline, just do:

```js
compose(h, treis(g), f);
```

## install

```sh
$ npm install treis
```

## usage

### `treis(fn)`
### `treis(name, fn)`

returns a decorated version of `fn` that prints the arguments given to `fn`
and its return value.

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

## browser support

works with [browserify](http://browserify.org/)

## useful vim mappings

these require [surround.vim](https://github.com/tpope/vim-surround)

```viml
" Surround a word with treis()
nmap <buffer> <Leader>tr ysiwftreis<CR>f(

" Surround a visual selection with treis()
vmap <buffer> <Leader>tr Sftreis<CR>f(

nmap <buffer> <Leader>tR ysiwfrequire('treis')<CR>f(
vmap <buffer> <Leader>tR Sfrequire('treis')<CR>f(
```
