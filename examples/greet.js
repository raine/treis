const R = require('ramda');
const treis = require('treis');

//    greet ∷ String → String
const greet = (name) =>
  `Hello, ${name}!`

//    greetPeople ∷ [String] → ()
const greetPeople =
  R.compose(console.log,
            R.join('\n'),
            R.map(treis(greet)));

const people = ['John', 'Jill', 'Bruce'];
treis(greetPeople)(people);
