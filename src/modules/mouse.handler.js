// dependencies

var robot = require("robotjs");

// initialization

// exports

module.exports = {
    moveVertically: _moveVertically,
    moveHorizontally: _moveHorizontally
};

// private methods

function _moveVertically(step, times) {
    _check(step, times);

    var currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x, currentPosition.y + step * times);
}

function _moveHorizontally(step, times) {
    _check(step, times);

    var currentPosition = robot.getMousePos();
    robot.moveMouse(currentPosition.x + step * times, currentPosition.y);
}

function _check(step, times) {
    if (!step) return reject(new Error('Step is not provided.'));
    if (!times) return reject(new Error('Times is not provided.'));
}