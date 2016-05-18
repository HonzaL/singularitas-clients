/* jshint node: true */
'use strict';

var express = require('express');

var server = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.get('/',function (request, response) {
	response.json({hello: 'World!'});
});

server.listen(server_port, server_ip_address, function () {
  console.log('Server is listening on ' + server_ip_address + ":" + server_port);
});
