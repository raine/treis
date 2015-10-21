const R = require('ramda');
const treis = require('treis');

//    greet ∷ String → String
const greet = (name) =>
  `Hello, ${name}!`

//    greetPeople ∷ [String] → String
const greetPeople =
  R.compose(R.join('\n'),
            R.map(treis(greet)));

const people = ['John', 'Jill', 'Bruce'];
console.log(treis(greetPeople)(people));
