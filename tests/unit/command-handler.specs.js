/* eslint-disable no-unused-expressions */

// dependencies

var handler = require('../../src/modules/command.handler');
var chai = require('chai');
var expect = chai.expect;

// specs

describe("Handler tests: need to be sure that handler works fine with various keys and window arguments", function () {

    describe("Should be ended with error when ... ", function () {
        it("... 'keys' value is empty", function () {
            return handler.execute('').then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("... 'keys' value is undefined", function () {
            return handler.execute(undefined).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("... 'keys' value is null", function () {
            return handler.execute(null).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Keys is not provided.');
            });
        });

        it("... 'keys' arg is specified but 'window' is null ", function () {
            var window = null;
            return handler.execute('{RIGHT}', window).then(noop, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Window is not provided.');
            });
        });

        it("... 'keys' arg is specified but 'window' is undefined ", function () {
            var window;
            return handler.execute('{RIGHT}', window).then(function (res) {
                expect(res).to.be.not.ok;
            }, function (err) {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Window is not provided.');
            });
        });
    });

    describe("Should receive success result when ... ", function () {
        it("... 'keys' arg is specified and not empty", function () {
            return handler.execute('{RIGHT}').then(function (res) {
                expect(res).to.be.ok;
                expect(res.encoded).to.be.equal('"{RIGHT}"');
            }, noop);
        });

        it("... 'window' is specified and not empty", function () {
            var window = '[ACTIVE]';
            return handler.execute('{RIGHT}', window).then(function (res) {
                expect(res).to.be.ok;
                expect(res.encoded).to.be.equal('"{RIGHT}"');
                expect(res.window).to.be.equal(window);
            }, noop);
        });
    });

});

function noop() {

}