'use strict';

const promise1 = Promise.resolve('Promise Resolve 1');
const promise2 = Promise.resolve('Promise Resolve 2');
const promise3 = Promise.resolve('Promise Resolve 3');
const promiseReject = Promise.reject('Promise Reject');

const iterable = [promise1, promise2, promise3, promiseReject];

Promise.all(iterable)
       .then(function (results) {
           console.log(results);
       })
       .catch(function (err) {
           console.log(err);
       })