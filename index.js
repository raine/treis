const R = require('ramda')
const chalk = require('chalk')
const utils = require('./lib/utils')
const str2color = require('./lib/str2color')
const getFnArgs = require('./lib/get-fn-args')
const getFnName = require('./lib/get-fn-name')
const stripAnsi = require('strip-ansi')
const inspect = utils.inspect
const print = utils.print

const mapTail = (fn, arr) => R.slice(0, 1, arr).concat(R.map(fn, R.tail(arr)))

const strRepeat = R.compose(R.join(''), R.repeat)
const lines = R.split('\n')
const unlines = R.join('\n')
const indentTailLines = (n, str) =>
  unlines(mapTail(R.concat(strRepeat(' ', n)), lines(str)))

const treis = (__print, color) => {
  const fnNameGetter = getFnName()
  const print = R.pipe(color ? R.identity : stripAnsi, __print)

  return (name, fn) => {
    if (typeof name === 'function') {
      fn = name
      name = null
    }

    return function(/* args */) {
      if (name == null) name = fnNameGetter(fn)
      name = name.toString()

      const prefix = name ? str2color(name) + ' ' : ''
      print(prefix + formatArgs(name, fn, arguments))
      const res = fn.apply(this, arguments)
      print(prefix + '=> ' + indentTailLines(name.length + 4, inspect(res)))
      return res
    }
  }
}

module.exports = treis(print, true)
module.exports.__init = treis

function formatArgs(name, fn, args) {
  const fnArgNames = getFnArgs(fn)
  const getArgPairs = (i, val) => [fnArgNames[i] || i.toString(), val]

  const pairs = R.zipWith(getArgPairs, R.range(0, args.length), args)
  const argLines = R.map(R.apply(formatArg), pairs)
  const space = strRepeat(' ', name.length + 1)
  return unlines(mapTail(R.concat(space), argLines))

  function formatArg(argName, val) {
    const indentLevel = name.length + argName.length + 3
    return R.join(': ', [
      chalk.green(argName),
      indentTailLines(indentLevel, inspect(val))
    ])
  }
}
