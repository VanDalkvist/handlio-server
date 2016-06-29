/* eslint-disable no-unused-expressions */

// dependencies

var handler = require('../../src/modules/mouse.handler');
var chai = require('chai');
var robot = require('robotjs');
var expect = chai.expect;

// specs

describe("Mouse handler API should correctly work ... ", function () {

    describe("Mouse handler should successfully move mouse position vertically when ... ", function () {
        it("... step is 10, times is 2", function () {
            _assertMouseYPosition(10, 2, 20);
        });

        it("... step is -10, times is 2", function () {
            _assertMouseYPosition(-10, 2, -20);
        });

        it("... step is 100, times is 2", function () {
            _assertMouseYPosition(100, 2, 200);
        });

        it("... step is 30, times is 3", function () {
            _assertMouseYPosition(30, 3, 90);
        });
    });
});

function _assertMouseYPosition(step, times, expected) {
    var currentPos = robot.getMousePos();

    handler.moveVertically(step, times);

    var newPos = robot.getMousePos();

    expect(newPos).to.be.ok;
    expect(newPos.y).to.be.equal(currentPos.y + expected);
}