// dependencies

var supertest = require('supertest');

// initialization

var server;
var serverUrl = 'localhost:' + process.env.TEST_PORT;
var request = supertest.agent(serverUrl);

// tests

describe('Handler API', function() {

    before("Setup server", function () {
        console.log('Starting test server...');
        server = require('../../bin/www');
    });

    after("Close server", function () {
        console.log('Closing test server...');
        server.close();
    });

    describe('Error states', function () {

        context('should receive 400 error when', function () {
            it("request body is undefined", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send()
                    .end(done);
            });

            it("request body is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({})
                    .end(done);
            });

            it("keys are not specified", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({hello: 'world'})
                    .end(done);
            });

            it("keys value is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({keys: ''})
                    .end(done);
            });
        });

        context("should receive 404 error when http method is not 'POST'", function () {
            it("'GET'", function (done) {
                request
                    .get('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });

            it("'PUT'", function (done) {
                request
                    .put('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });

            it("'DELETE'", function (done) {
                request
                    .delete('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });
        });
    });

    describe("Successful states", function () {

        it("when keys are specified and are not empty", function (done) {
            request
                .post('/api/handle')
                .expect(200)
                .send({keys: '{ENTER}'})
                .end(done);
        });

    });

});