var R         = require('ramda');
var chalk     = require('chalk');
var inspect   = require('./lib/inspect');
var str2color = require('./lib/str2color');
var getFnArgs = require('./lib/get-fn-args');
var getFnName = require('./lib/get-fn-name');

var mapTail = function(fn, arr) {
  return R.slice(0, 1, arr).concat(R.map(fn, R.tail(arr)));
};
var strRepeat = R.compose(R.join(''), R.repeat);
var lines = R.split('\n');
var unlines = R.join('\n');
var indentTailLines = function(n, str) {
  return unlines(mapTail(R.concat(strRepeat(' ', n)), lines(str)));
};

module.exports = function(name, fn) {
  return function(/* args */) {
    if (typeof name === 'function') {
      fn   = name;
      name = getFnName(fn);
    }

    var prefix = name ? str2color(name) + ' ' : '';
    process.stderr.write(prefix + formatArgs(name, fn, arguments) + '\n');
    var res = fn.apply(this, arguments);
    process.stderr.write(prefix + '=> ' + indentTailLines(name.length + 4, inspect(res)) + '\n');
    return res;
  };
};

function formatArgs(name, fn, args) {
  var fnArgNames = getFnArgs(fn);
  var getArgPairs = function(i, val) {
    return [ fnArgNames[i] || i, val ];
  };

  var pairs = R.zipWith(getArgPairs, R.range(0, args.length), args);
  var argLines = R.map(R.apply(formatArg), pairs);
  var space = strRepeat(' ', name.length + 1);
  return unlines(mapTail(R.concat(space), argLines));

  function formatArg(name, val) {
    return R.join(': ', [ chalk.green(name), inspect(val) ]);
  }
}
