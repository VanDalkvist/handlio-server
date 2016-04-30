// dependencies

var debugError = require('debug')('handlio:server:error');

// exports

module.exports = {
    'notFound': _404,
    'internalServerForDev': _500forDev,
    'internalServer': _500
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