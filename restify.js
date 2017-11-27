"use strict";

var storage = require('./src/storage.js');
const restify = require('restify');
const restifyPlugins = require('restify').plugins;

var server = restify.createServer();
server.use(restifyPlugins.bodyReader());

server.get('/', (request, response, next) => {
    response.send(200, storage.list());
    next();
});

server.get('/:name', (request, response, next) => {
    let value = storage.get(request.params.name);
    if (value) {
        response.send(200, value);
    } else {
        response.send(404);
    }
    next();
});

var set = (request, response, next) => {
    response.send(200, JSON.stringify(storage.set(request.params.name, request.body)));
    next();
};

server.post('/:name', set);
server.put('/:name', set);

server.del('/:name', (request, response, next) => {
    if (storage.del(request.params.name)) {
        response.send(200, JSON.stringify(true));
    } else {
        response.send(404);
    }
    next();
});

server.listen(9000, function() {
  console.log('%s listening at %s', server.name, server.url);
});