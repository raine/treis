var util = require('util');

var INSPECT_OPTS = {
  colors: true,
  depth: null
};

module.exports = function(obj) {
  return util.inspect(obj, INSPECT_OPTS);
};
