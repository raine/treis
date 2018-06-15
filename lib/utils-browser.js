const util = require('util')

exports.inspect = obj =>
  util.inspect(obj, {
    colors: false,
    depth: null
  });

exports.print = (msg) => {
  console.log(msg)
}
