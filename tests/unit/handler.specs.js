/* eslint-disable no-unused-expressions */

// dependencies

var handler = require('../../src/modules/handler');
var chai = require('chai');
var expect = chai.expect;

// specs

describe("Handler tests: need to be sure that handler works fine with various keys argument", function () {

    describe("Should be ended with error when ... ", function () {

        it("... keys value is empty", function () {
            return handler.execute('').then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("... keys value is undefined", function () {
            return handler.execute(undefined).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("... keys value is null", function () {
            return handler.execute(null).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });
    });

    describe("Should receive success result when ... ", function () {

        it("... keys are specified and not empty", function () {
            return handler.execute('123').then(function (res) {
                expect(res).to.be.ok;
                expect(res.encoded).to.be.equal('"123"');
            }, noop);
        });

    });

});

function noop() {

}