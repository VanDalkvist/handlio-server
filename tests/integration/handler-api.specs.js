// dependencies

var supertest = require('supertest');

// initialization

var server;
var serverUrl = 'localhost:' + process.env.TEST_PORT;
var request = supertest.agent(serverUrl);

// tests

describe('Handler API: need to be sure that handler API methods receive expected responses', function () {

    before("Starting test server... ", function () {
        server = require('../../bin/www'); // eslint-disable-line global-require
    });

    after("Closing test server... ", function () {
        server.close();
    });

    describe("Next requests should be ended with error: ", function () {

        context('should receive 400 error when ... ', function () {
            it("... request body is undefined", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send()
                    .end(done);
            });

            it("... request body is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({})
                    .end(done);
            });

            it("... 'keys' is not specified", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({ hello: 'world' })
                    .end(done);
            });

            it("... 'keys' value is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({ keys: '' })
                    .end(done);
            });

            context("... 'keys' value is specified but ...", function () {

                it("... 'window' is undefined", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({ keys: '{RIGHT}', window: undefined })
                        .end(done);
                });

                it("... 'window' is null", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({ keys: '{RIGHT}', window: null })
                        .end(done);
                });

                it("... 'window' is empty", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({ keys: '{RIGHT}', window: '' })
                        .end(done);
                });
            });
        });

        context("should receive 404 error when http method is not 'POST' yet ...", function () {
            it("... 'GET'", function (done) {
                request
                    .get('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });

            it("... 'PUT'", function (done) {
                request
                    .put('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });

            it("... 'DELETE'", function (done) {
                request
                    .delete('/api/handle')
                    .expect(404)
                    .send()
                    .end(done);
            });
        });
    });

    describe("Next requests should receive success responses: ", function () {

        it("... when 'keys' and 'window' are specified and not empty", function (done) {
            request
                .post('/api/handle')
                .expect(200)
                .send({ keys: '{RIGHT}', window: '[ACTIVE]' })
                .end(done);
        });

    });

});