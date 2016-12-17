/**
 * The MIT License (MIT)
 * Copyright (c) 2013 Gustavo Paes <gustavo.paes@gmail.com>
 *
 * Servidor para realização de testes de respostas HTTP.
 * Permite simular timeout.
 */
"use strict";

const http = require('http');
const parseUrl = require('url').parse;
const PORT = process.env.PORT || 8080;

const handlerRequest = (request, response) => {
  let url = parseUrl(request.url, true);

  console.log(`-> ${url.pathname}`);

  // define o http code
  // /(content-type)/(http status)/
  let defines = url.pathname.match(/^\/(json|jsonp|html)\/(\d+)\/?$/);

  if(defines) {
    let code = defines[2];
    let contentType = '';
    let text = '';

    switch(defines[1]) {
      case 'json':
        contentType = 'application/json';
        text = JSON.stringify({ 'code': +code });
      break;

      case 'jsonp':
        contentType = 'application/javascript';
        text =  (url.query.callback ? url.query.callback : 'callback') + '('+JSON.stringify({ 'code': code })+');';
      break;

      case 'html':
        contentType = 'text/html';
        text = '<h1>Code '+code+'</h1>';
      break;

      default:
        contentType = 'text/plain';
        text = code;
      break;
    }

    setTimeout(function() {
      response.writeHead(code, {
        'Content-Type': contentType,
        'charset': 'utf-8'
      });
      response.end( text );
    }, (parseInt(url.query.timeout) || 0) * 1000);
  }
  else {
    response.write(url.pathname);
    response.end();
  }
};

// Inicia o server HTTP.
// O websocket usará a mesma porta para a conexão,
// só que através do protocolo 'ws' e não 'http'.
const server = http.createServer(handlerRequest);
server.listen( PORT );

console.log(`http://localhost:${PORT}`);
