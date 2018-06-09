var R = require('ramda')

var parseStrs = R.compose(R.defaultTo([]), R.match(/([^\s,]+)/g))
var getParensContent = function(str) {
  return R.slice(R.indexOf('(', str) + 1, R.indexOf(')', str), str)
}

module.exports = R.pipe(R.toString, getParensContent, parseStrs)
