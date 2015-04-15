var inspect = require('./lib/inspect');
var str2color = require('./lib/str2color');
var clone = require('clone');

module.exports = function(name, fn) {
  if (typeof name === 'function') {
    fn   = name;
    name = null;
  }

  return function(/* args */) {
    var args = clone(arguments);
    var res = fn.apply(this, arguments);
    var prefix = name ? str2color(name) + ' ' : '';

    console.log(prefix + inspect({
      in: args,
      out: res
    }));

    return res;
  };
};
