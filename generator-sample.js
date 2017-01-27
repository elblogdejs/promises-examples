'use strict';

function* generator() {
    return 'Hello Generator!';
}

const gen = generator().next();

console.log(gen);