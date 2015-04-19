var R = require('ramda');
var treis = require('../');

function greet(name) {
  return "Hello, " + name + '!';
}

var people = ['John', 'Jill', 'Bruce'];
var greetPeople = R.compose(R.forEach(console.log), R.map(treis(greet)));
treis(greetPeople)(people);
