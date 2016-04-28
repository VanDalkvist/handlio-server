var handler = require('../../src/modules/handler');
var chai = require('chai');
var expect = chai.expect;

describe('Handler', function () {

    describe('Error states', function () {

        it("keys value is empty", function () {
            return handler.execute('').then(function () {
            }, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        // context("should receive 404 error when http method is not 'POST'", function () {
        //     it("'GET'", function (done) {
        //         request
        //             .get('/api/handle')
        //             .expect(404)
        //             .send()
        //             .end(done);
        //     });
        //
        //     it("'PUT'", function (done) {
        //         request
        //             .put('/api/handle')
        //             .expect(404)
        //             .send()
        //             .end(done);
        //     });
        //
        //     it("'DELETE'", function (done) {
        //         request
        //             .delete('/api/handle')
        //             .expect(404)
        //             .send()
        //             .end(done);
        //     });
        // });
    });

    describe("Successful states", function () {

        // it("when keys are specified and are not empty", function (done) {
        //     request
        //         .post('/api/handle')
        //         .expect(200)
        //         .send({ keys: '{ENTER}' })
        //         .end(done);
        // });

    });

});