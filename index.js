var R         = require('ramda');
var chalk     = require('chalk');
var utils     = require('./lib/utils');
var str2color = require('./lib/str2color');
var getFnArgs = require('./lib/get-fn-args');
var getFnName = require('./lib/get-fn-name');
var inspect   = utils.inspect;
var print     = utils.print;

var mapTail = function(fn, arr) {
  return R.slice(0, 1, arr).concat(R.map(fn, R.tail(arr)));
};
var strRepeat = R.compose(R.join(''), R.repeat);
var lines = R.split('\n');
var unlines = R.join('\n');
var indentTailLines = function(n, str) {
  return unlines(mapTail(R.concat(strRepeat(' ', n)), lines(str)));
};

var treis = function(print) {
  var fnNameGetter = getFnName()

  return function(name, fn) {
    if (typeof name === 'function') {
      fn = name;
      name = null;
    }

    return function(/* args */) {
      if (name == null) name = fnNameGetter(fn);
      name = name.toString();

      var prefix = name ? str2color(name) + ' ' : '';
      print(prefix + formatArgs(name, fn, arguments));
      var res = fn.apply(this, arguments);
      print(prefix + '=> ' + indentTailLines(name.length + 4, inspect(res)));
      return res;
    };
  }
};

module.exports = treis(print)
module.exports.__init = treis

function formatArgs(name, fn, args) {
  var fnArgNames = getFnArgs(fn);
  var getArgPairs = function(i, val) {
    return [ fnArgNames[i] || i.toString(), val ];
  };

  var pairs = R.zipWith(getArgPairs, R.range(0, args.length), args);
  var argLines = R.map(R.apply(formatArg), pairs);
  var space = strRepeat(' ', name.length + 1);
  return unlines(mapTail(R.concat(space), argLines));

  function formatArg(argName, val) {
    var indentLevel = name.length + argName.length + 3;
    return R.join(': ', [
      chalk.green(argName),
      indentTailLines(indentLevel, inspect(val))
    ]);
  }
}
