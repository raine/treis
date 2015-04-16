var R = require('ramda');

var parseStrs = R.compose( R.defaultTo([]), R.match(/([^\s,]+)/g) );
var getParensContent = function(str) {
  return R.substring(
    R.strIndexOf('(', str) + 1,
    R.strIndexOf(')', str),
    str
  );
};

module.exports = R.pipe( R.invoke('toString', []), getParensContent, parseStrs );
