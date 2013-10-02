/**
 * The MIT License (MIT)
 * Copyright (c) 2013 Gustavo Paes <gustavo.paes@gmail.com>
 *
 * Servidor para realização de testes de respostas HTTP.
 * Permite simular timeout.
 */
(function( PORT ) {
  "use strict";

  var http = require('http'),
    _url = require('url');

  // Inicia o server HTTP.
  // O websocket usará a mesma porta para a conexão,
  // só que através do protocolo 'ws' e não 'http'.
  var server = http.createServer(function(request, response) {
    var url = _url.parse(request.url, true);

    // define o http code
    var defines = url.pathname.match(/^\/(json|jsonp|html)\/(\d+)\/?$/);

    if(defines) {
      var code = defines[2],
        contentType = '',
        text = '';

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
      }

      setTimeout(function() {
        response.writeHead(code, { 'Content-Type': contentType, 'charset': 'utf-8' });
        response.end( text );
      }, (+url.query.timeout || 0) * 1000);

    }
    else {
      response.end();
    }

  }).listen( PORT );

}(8080));
