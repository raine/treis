const util = require('util')
const ansi = require ('ansicolor')

exports.inspect = obj =>
  util.inspect(obj, {
    colors: true,
    depth: null
  })

// ansicolor has some issue with line breaks, splitting the message by line to
// multiple console.log calls is a workaround
exports.print = (msg) => {
  const msgs = msg.split('\n')
  msgs.forEach(m => {
    const parsed = ansi.parse(m)
    console.log(...parsed.asChromeConsoleLogArguments)
  })
}
