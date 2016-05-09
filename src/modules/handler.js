// dependencies

var child = require('child_process');
var path = require('path');
var Q = require('q');

var vendors = require('handlio-vendors');

var driver = path.join('node_modules', 'handlio-vendors', vendors['send-keys']);

// initialization

// exports

module.exports = {
    execute: _execute
};

// private methods

function _execute(commandString, windowName) {
    return Q.promise(function (resolve, reject) {
        if (!commandString) return reject(new Error('Keys is not provided.'));
        if (!windowName) return reject(new Error('Window is not provided.'));

        var command = _prepareCommand(commandString);

        var cmd = [driver, '-w', windowName, command].join(' ');

        child.exec(cmd, function (err) {
            if (err) return reject(err);

            resolve({ encoded: command, window: windowName });
        });
    });
}

/**
 * ctrl sign should be placed with double identifier wrap command to quotes
 * @param command unprepared command argument
 * @returns {string} command to execute in WinSendKeys
 * @private
 */
function _prepareCommand(command) {
    return '"' + command.replace('^', '^^') + '"';
}