'use strict';

const http = require('axios');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

function getBulbasaur () {
    return new Promise(function(resolve, reject) {
        http.get(apiUrl + 'bulbasaur')
            .then(function (data) {
                resolve(data);
            })           
            .catch(function (err) {
                reject(err);
            })
    });
}

function getSquirtle () {
    return new Promise(function(resolve, reject) {
        http.get(apiUrl + 'squirtle')
            .then(function (data) {
                resolve(data);
            })           
            .catch(function (err) {
                reject(err);
            })
    });
}

function getCharmander () {
    return new Promise(function(resolve, reject) {
        http.get(apiUrl + 'charmander')
            .then(function (data) {
                resolve(data);
            })           
            .catch(function (err) {
                reject(err);
            })
    });
}

function getButterfree () {
    return new Promise(function(resolve, reject) {
        http.get(apiUrl + 'butterfree')
            .then(function (data) {
                resolve(data);
            })           
            .catch(function (err) {
                reject(err);
            })
    });
}

const iterable = [getBulbasaur(), getSquirtle(), getCharmander(), getButterfree()];

Promise.all(iterable)
       .then(function (results) {
           console.log(results);
       })
       .catch(function (err) {
           console.log(err);
       })

