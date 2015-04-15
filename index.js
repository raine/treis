var inspect = require('./lib/inspect');
var bold = require('chalk').bold;

module.exports = function(name, fn) {
  if (typeof name === 'function') {
    fn   = name;
    name = null;
  }

  return function() {
    var res = fn.apply(this, arguments);
    var prefix = name ? bold(name) + ' ' : '';

    process.stderr.write(prefix + inspect({
      in: arguments,
      out: res
    }) + '\n');

    return res;
  }
};
