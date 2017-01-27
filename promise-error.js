'use strict';

return Promise.reject(Error('My Promise Error')).then(function () {
    console.log('not run');
})
.then(function () {
    console.log('not run');
})
.catch(function (err) {
    // cuando la promesa se cumple con algun Error
    console.log(err);
})