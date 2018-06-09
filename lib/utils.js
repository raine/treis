const util = require('util')

exports.inspect = (obj) =>
  util.inspect(obj, {
    colors: true,
    depth: null
  })

exports.print = (str) => {
  process.stderr.write(str + '\n')
}
