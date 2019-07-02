var http = require('http');
var app = require('./config/express');
var ip = require("ip");
const PORTA = 3000;

var server = http.createServer(app)
        .listen(PORTA, function () {
            let serverUrl = 'http://' + ip.address() + ':' + PORTA;
            console.log('Servidor iniciado em ' + serverUrl);
            console.log('Produto exemplo: ' + serverUrl + '/static/product.html');
        });

