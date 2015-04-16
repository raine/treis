var bold = require('chalk').bold;

// deterministically color a string without reusing colors until all colors
// are used once
module.exports = (function() {
  var COLORS = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
  var unusedColors = COLORS.slice();
  var colorByStr = {};

  return function(str) {
    var color = colorByStr[str] || (function() {
      if (unusedColors.length === 0) unusedColors = COLORS.slice();
      var color = strToElem(unusedColors, str);
      colorByStr[str] = color;
      unusedColors.splice(unusedColors.indexOf(color), 1);
      return color;
    }());

    return bold[color](str);
  };

  function strToElem(arr, str) {
    return arr[charCodeSum(str) % arr.length];
  }

  function charCodeSum(str) {
    return str.split('').reduce(function(sum, c) {
      return sum + c.charCodeAt();
    }, 0);
  }
}());
