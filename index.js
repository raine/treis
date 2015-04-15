var inspect = require('./lib/inspect');
var str2color = require('./lib/str2color');

module.exports = function(name, fn) {
  if (typeof name === 'function') {
    fn   = name;
    name = null;
  }

  return function(/* args */) {
    var res = fn.apply(this, arguments);
    var prefix = name ? str2color(name) + ' ' : '';

    console.log(prefix + inspect({
      in: arguments,
      out: res
    }));

    return res;
  };
};
