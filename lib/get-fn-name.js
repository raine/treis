var CHAR = 'λ';
var anonN = 0;

module.exports = function(fn) {
  return fn.name || (CHAR + (++anonN));
};
