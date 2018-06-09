const R = require('ramda')

exports.inspect = require('util-inspect')
exports.print = R.bind(console.log, console)
