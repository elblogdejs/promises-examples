'use strict';

function* generator () {
    yield 'Heloo';
    yield 'World';
    yield 'Generator';
}

const gen = generator();

console.log(gen.next()); // { value: 'Heloo', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: 'Generator', done: false }
console.log(gen.next()); // { value: undefined, done: true }