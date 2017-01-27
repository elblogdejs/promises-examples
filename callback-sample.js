'use strict';

const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('hello.txt', 'utf-8', function (err, file) {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		if (err) {	
			// si hay error		
			res.write('File not found');
		} else {
			// si no hay error, escribe el texto del archivo al navegador
			res.write(file);
			res.end();
		}
	})
}).listen('3000', function () {
	// el servidor escucha en el puerto local 3000
	console.log('Server Rocks in port 3000! imi');
});