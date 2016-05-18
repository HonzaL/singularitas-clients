/* jshint node: true */
'use strict';

var express = require('express');

var server = express();

server.get('/',function (request, response) {
	response.json({hello: 'World!'});
});

server.listen(8080, function () {
  console.log('Server is listening on port 8080!');
});
