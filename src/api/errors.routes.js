// dependencies

var debugError = require('debug')('handlio:server:error');

// exports

module.exports = {
    404: _404,
    '500forDev': _500forDev,
    500: _500
};

// initialization

// private methods

function _404(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

function _500forDev(err, req, res) {
    debugError(err);
    res.status(err.status || 500);
    res.json({ message: err.message, error: err });
}

function _500(err, req, res) {
    debugError(err);
    res.status(err.status || 500);
    res.send('Internal Server Error.');
}