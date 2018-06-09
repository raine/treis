const R = require('ramda')
const treis = require('../')

const ABC = ['a', 'b', 'c', 'd', 'e', 'f']
const repeatAndJoin = R.compose(R.join(''), R.repeat)
treis('zipWith', R.zipWith)(
  treis(repeatAndJoin),
  ABC,
  R.range(1, ABC.length + 1)
)
