module.exports = function() {
  var CHAR = 'λ'
  var anonN = 0

  return function(fn) {
    return fn.name || CHAR + ++anonN
  }
}
