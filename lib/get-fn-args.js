const R = require('ramda')

const parseStrs = R.compose(R.defaultTo([]), R.match(/([^\s,]+)/g))
const getParensContent = (str) =>
  R.slice(R.indexOf('(', str) + 1, R.indexOf(')', str), str)

module.exports = R.pipe(R.toString, getParensContent, parseStrs)
