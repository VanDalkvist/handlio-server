// dependencies

var debugError = require('debug')('handlio:server:error');

// exports

module.exports = {
    notFound: _404,
    internalServer: _500
};

// initialization

// private methods

function _404(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

function _500(err, req, res, next) {
    debugError(err);
    res.status(err.status || 500);
    res.send(err.status ? err.message : 'Internal Server Error.');
}