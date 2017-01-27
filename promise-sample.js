'use strict';

const http = require('http');
const fs = require('fs');

function readFile (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, file) {            
            if (err) {	
                // si hay error		
                reject(err);                
            } else {
                // si no hay error, escribe el texto del archivo al navegador
                resolve(file);                
            }
        })
    })
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    readFile('hello.txt')
    .then(function (file) {
        return 'This text come from the hello.txt: ' + file;
    })
    .then(function (text) {
        return text.toUpperCase();
    })
    .then(function (upperText) {
        res.write(upperText);        
        res.end();
    }).catch(function (err) {
        res.write('File not found');
    })
	
}).listen('3000', function () {
	// el servidor escucha en el puerto local 3000
	console.log('Server Rocks in port 3000! imi');
});