// dependencies

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorsRouter = require('./api/errors.routes');

// initialization

var environmentsWithDisabledLogger = ['test'];

var app = express();

app.use(logger('dev', _getLoggerConfig(app)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./api'));

app.use(errorsRouter.notFound);
app.use(errorsRouter.internalServer);

// exports

module.exports = app;

// private functions

function _getLoggerConfig(app) {
    return {
        skip: function () {
            return environmentsWithDisabledLogger.indexOf(app.get('env')) >= 0;
        }
    };
}