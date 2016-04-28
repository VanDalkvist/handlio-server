var handler = require('../../src/modules/handler');
var chai = require('chai');
var expect = chai.expect;

describe('Handler', function () {

    describe('Error states', function () {

        it("keys value is empty", function () {
            return handler.execute('').then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("keys value is undefined", function () {
            return handler.execute(undefined).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("keys value is null", function () {
            return handler.execute(null).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });
    });

    describe("Successful states", function () {

        it("when keys are specified and not empty", function () {
            return handler.execute('123').then(function (res) {
                expect(res).to.be.ok;
                expect(res.encoded).to.be.equal('"123"');
            }, function (err) {
                expect(err).to.be.equal(undefined);
            });
        });

    });

});

function noop() {

}