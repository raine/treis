var util = require('util');

module.exports = function(obj) {
  return util.inspect(obj, {
    colors: true,
    depth: null
  });
};
