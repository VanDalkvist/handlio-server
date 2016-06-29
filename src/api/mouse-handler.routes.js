// dependencies

var debugError = require('debug')('handlio:handler:error');
var handler = require('../modules/mouse.handler');

// initialization

var movers = {
    'vertical': _move(handler.moveVertically),
    'horizontal': _move(handler.moveVertically)
};

// exports

module.exports = {
    moveVertically: movers['vertical'],
    moveHorizontally: movers['horizontal']
};

// private methods

function _move(action) {
    return function (req, res) {
        var step = req.body.step;
        var times = req.body.times;

        try {
            action(step, times);
        }
        catch (err) {
            debugError(err);
            return _badRequest(res, err.message);
        }

        res.status(200).send();
    };
}

function _badRequest(res, message) {
    res.status(400).json({ error: message });
}