// dependencies

var child = require('child_process');
var path = require('path');
var debugError = require('debug')('handlio:handler:error');

var driver = path.join(__dirname, '../../vendors/WinSendKeys/WinSendKeys.exe');

var windowName = '[ACTIVE]'; // todo: from config (default) or from request params

// exports

module.exports = function (req, res) {
    var keysString = req.body.keys;

    if (!keysString) return _badRequest(res);

    var keys = _prepareKeys(keysString);

    var cmd = [driver, '-w', windowName, keys].join(' ');

    child.exec(cmd, function (err) {
        if (err) {
            debugError(err);
            return _badRequest(res);
        }

        res.json({received: keysString, encoded: keys});
    });
};

// private methods

function _badRequest(res) {
    res.status(400).json({error: 'Specify keys'});
}

function _prepareKeys(keys) {
    // ctrl sign should be placed with double identifier
    // wrap command to quotes
    return '"' + keys.replace('^', '^^') + '"';
}