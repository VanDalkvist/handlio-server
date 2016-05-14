// dependencies

// exports

var loggerConfig = {
    disabledFor: ['test'],
    get: _getLoggerConfig
};
module.exports = {
    logger: loggerConfig
};

// initialization

// private methods

function _getLoggerConfig(app) {
    return {
        skip: function () {
            return loggerConfig.disabledFor.indexOf(app.get('env')) >= 0;
        }
    };
}
