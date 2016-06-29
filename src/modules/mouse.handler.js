// dependencies

var path = require('path');
var Q = require('q');
var robot = require("robotjs");

// initialization

// exports

module.exports = {
    moveVertically: _moveVertically
};

// private methods

function _moveVertically(step, times) {
    // Speed up the mouse.
    // robot.setMouseDelay(2);
    var currentPosition = robot.getMousePos();
    var screenSize = robot.getScreenSize();
    // var height = (screenSize.height / 2) - 10;
    // var width = screenSize.width;
    var shift = step * times;
    robot.moveMouse(currentPosition.x, currentPosition.y + shift);
}