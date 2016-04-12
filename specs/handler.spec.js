var chai = require('chai');
var supertest = require('supertest');
var expect = chai.expect;

var serverUrl = 'localhost:' + (process.env.PORT || '3000');
var request = supertest.agent(serverUrl);

describe('Handler API', function() {

    describe('Error states', function () {

        context('should receive 400 error', function () {
            it("when request body is undefined", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send()
                    .end(done);
            });

            it("when request body is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({})
                    .end(done);
            });

            it("when keys are not specified", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({hello: 'world'})
                    .end(done);
            });

            it("when keys value is empty", function (done) {
                request
                    .post('/api/handle')
                    .expect(400)
                    .send({keys: ''})
                    .end(done);
            });
        });

        it("should receive 500 error when http method is not 'POST'", function (done) {
            request
                .get('/api/handle')
                .expect(500)
                .send()
                .end(done);
        });
    });

    describe("Successful states", function () {

        it("when keys are specified and are not empty", function (done) {
            request
                .post('/api/handle')
                .withCredentials()
                // .expect(200)
                .send({
                    keys: '{ENTER}'})
                .end(function (err, res) {
                    if (err) throw err;

                    done();
                });
        });

    });

});