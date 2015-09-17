var R = require('ramda');

var parseStrs = R.compose( R.defaultTo([]), R.match(/([^\s,]+)/g) );
var getParensContent = function(str) {
  return R.slice(
    R.indexOf('(', str) + 1,
    R.indexOf(')', str),
    str
  );
};

var toString = R.invoker(0, 'toString');

module.exports = R.pipe( toString, getParensContent, parseStrs );
