var R = require('ramda');
var treis = require('../');

var ABC = ['a', 'b', 'c', 'd', 'e', 'f'];
var repeatAndJoin = R.compose(R.join(''), R.repeat);
treis('zipWith', R.zipWith)(treis(repeatAndJoin), ABC, R.range(1, ABC.length + 1));
