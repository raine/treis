var inspect = require('./lib/inspect');

module.exports = function(fn) {
  return function() {
    var res = fn.apply(this, arguments);
    console.log(inspect({
      in: arguments,
      out: res
    }));

    return res;
  }
};
