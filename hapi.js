"use strict";

var storage = require('./src/storage.js');
const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server({ port: 9001 });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) => {
        return storage.list();
    }
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, response) => {
        let value = storage.get(request.params.name);
        if (value) {
            return value;
        } else {
            throw Boom.notFound();
        }
    }
});
server.route({
    method: ['POST', 'PUT'],
    path: '/{name}',
    handler: (request, response) => {
        return storage.set(request.params.name, request.payload.toString('utf8'));
    },
    config: {
        payload: {
            output: 'data',
            parse: false
        }
    }
});
server.route({
    method: 'DELETE',
    path: '/{name}',
    handler: (request, response) => {
        if (storage.del(request.params.name)) {
            return true;
        } else {
            throw Boom.notFound();
        }
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});