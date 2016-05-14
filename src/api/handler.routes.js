// dependencies

var debugError = require('debug')('handlio:handler:error');
var handler = require('../modules/handler');

// exports

module.exports = {
    execute: _execute
};

// private methods

function _execute(req, res) {
    var keysString = req.body.keys;
    var windowName = req.body.window;

    handler.execute(keysString, windowName).then(function (result) {
        res.json(result);
    }, function (err) {
        debugError(err);
        return _badRequest(res);
    }).done();
}

function _badRequest(res) {
    res.status(400).json({ error: 'Specify keys' });
}