var inspect = require('./lib/inspect');

module.exports = function(name, fn) {
  if (typeof name === 'function') {
    fn   = name;
    name = null;
  }

  return function() {
    var res = fn.apply(this, arguments);
    var prefix = name ? name + ' ' : '';

    console.log(prefix + inspect({
      in: arguments,
      out: res
    }));

    return res;
  }
};
