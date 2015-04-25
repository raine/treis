var util = require('util');

exports.inspect = function(obj) {
  return util.inspect(obj, {
    colors: true,
    depth: null
  });
};

exports.print = function(str) {
  process.stderr.write(str + '\n');
};
