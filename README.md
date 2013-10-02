Tester Response Server
=======================

Servidor NodeJS para simular respostas HTTP e _timeouts_.

##Proposta

**Tester Response Server** tem por objetivo servir como um simples servidor de
de testes de respostas HTTP (ie: 404, 501, 200, etc...) e simular demora nas respostas (timeout).

##Instalando e usando

    git clone https://github.com/gustavopaes/tester-response-server.git
    node server.js

### Exemplos

É possível fazer o servidor retornar HTML, JSON ou JSONP. Qualquer código HTTP é aceito. Exemplos:

1. http://localhost:8080/jsonp/200
2. http://localhost:8080/json/200
3. http://localhost:8080/html/200
4. http://localhost:8080/json/500?timeout=3
5. http://localhost:8080/jsonp/200?timeout=3&callback=func

Para uma lista completa de códigos HTTP, acesse:
http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

##Licença
The MIT License (MIT)

Copyright (c) 2013 Gustavo Paes

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
