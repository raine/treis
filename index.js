var inspect = require('./lib/inspect');
var str2color = require('./lib/str2color');
var R = require('ramda');
var chalk = require('chalk');
var getFnArgs = require('./lib/get-fn-args');

module.exports = function(name, fn) {
  if (typeof name === 'function') {
    fn   = name;
    name = fn.name || 'ƒ';
  }

  var prefix = name ? str2color(name) + ' ' : '';

  return function(/* args */) {
    console.log(prefix + formatArgsStr(name, fn, arguments));
    var res = fn.apply(this, arguments);
    console.log(prefix + '=> ' + inspect(res));
    return res;
  };
};

var repeatStr = R.compose(R.join(''), R.repeat);
function formatArgsStr(name, fn, args) {
  var fnArgNames = getFnArgs(fn);
  var getArgPairs = function(i, val) {
    return [ fnArgNames[i] || i, val ];
  };

  var pairs = R.zipWith(getArgPairs, R.range(0, args.length), args);
  var lines = R.map(R.apply(formatArg), pairs);
  var indentation = repeatStr(' ', name.length + 1);
  var indentedTail = R.map(R.concat(indentation), R.tail(lines));
  return R.join('\n', [ R.head(lines) ].concat(indentedTail) );

  function formatArg(name, val) {
    return R.join(': ', [ chalk.green(name), inspect(val) ]);
  }
}
