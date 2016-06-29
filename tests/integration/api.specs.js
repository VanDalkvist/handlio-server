// dependencies

var supertest = require('supertest');

// initialization

var server;
var serverUrl = 'localhost:' + process.env.TEST_PORT;
var request = supertest.agent(serverUrl);

// tests

before("Starting test server... ", function () {
    server = require('../../bin/www'); // eslint-disable-line global-require
});

after("Closing test server... ", function () {
    server.close();
});

describe('Handler API: need to be sure that handler API methods receive expected responses', function () {

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
                    .send({hello: 'world'})
                    .end(done);
            });

            it("... 'keys' value is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({keys: ''})
                    .end(done);
            });

            context("... 'keys' value is specified but ...", function () {

                it("... 'window' is undefined", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({keys: '{RIGHT}', window: undefined})
                        .end(done);
                });

                it("... 'window' is null", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({keys: '{RIGHT}', window: null})
                        .end(done);
                });

                it("... 'window' is empty", function (done) {
                    request
                        .post('/api/handle')
                        .expect(400)
                        .send({keys: '{RIGHT}', window: ''})
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
                .send({keys: '{RIGHT}', window: '[ACTIVE]'})
                .end(done);
        });

    });

});

describe('Mouse API: need to be sure that mouse API methods receive expected responses', function () {

    describe("Next requests should be ended with error: ", function () {

        var actions = [
            '/api/mouse/move/vertical',
            '/api/mouse/move/horizontal'
        ];

        actions.forEach(function (action) {
            context("for " + action, function () {
                context('should receive 400 error when ... ', function () {
                    it("... request body is undefined", function (done) {
                        request
                            .post(action)
                            .expect(400)
                            .send()
                            .end(done);
                    });

                    it("... request body is empty", function (done) {
                        request
                            .post(action)
                            .expect(400)
                            .send({})
                            .end(done);
                    });

                    it("... 'step' is not specified", function (done) {
                        request
                            .post(action)
                            .expect(400)
                            .send({hello: 'world'})
                            .end(done);
                    });

                    it("... 'step' value is empty", function (done) {
                        request
                            .post(action)
                            .expect(400)
                            .send({step: ''})
                            .end(done);
                    });

                    context("... 'step' value is specified but ...", function () {

                        it("... 'times' is undefined", function (done) {
                            request
                                .post(action)
                                .expect(400)
                                .send({step: 10, times: undefined})
                                .end(done);
                        });

                        it("... 'times' is null", function (done) {
                            request
                                .post(action)
                                .expect(400)
                                .send({step: 10, times: null})
                                .end(done);
                        });

                        it("... 'times' is empty", function (done) {
                            request
                                .post(action)
                                .expect(400)
                                .send({step: 10, times: ''})
                                .end(done);
                        });
                    });
                });

                context("should receive 404 error when http method is not 'POST' yet ...", function () {
                    it("... 'GET'", function (done) {
                        request
                            .get(action)
                            .expect(404)
                            .send()
                            .end(done);
                    });

                    it("... 'PUT'", function (done) {
                        request
                            .put(action)
                            .expect(404)
                            .send()
                            .end(done);
                    });

                    it("... 'DELETE'", function (done) {
                        request
                            .delete(action)
                            .expect(404)
                            .send()
                            .end(done);
                    });
                });
            });
        });

    });

    describe("Next requests should receive success responses: ", function () {

        it("... when 'step' and 'times' are specified and not empty for vertical move", function (done) {
            request
                .post('/api/mouse/move/vertical')
                .expect(200)
                .send({step: 10, times: 2})
                .end(done);
        });

        it("... when 'step' and 'times' are specified and not empty for horizontal move", function (done) {
            request
                .post('/api/mouse/move/horizontal')
                .expect(200)
                .send({step: 10, times: 2})
                .end(done);
        });

    });

});