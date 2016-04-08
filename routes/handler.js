// dependencies

var child = require('child_process');
var runner = require('path').normalize('./server/vendors/WinSendKeys/WinSendKeys.exe');

var windowName = '[ACTIVE]'; // todo: from config (default) or from request params

// exports

module.exports = function (req, res) {

    var keyStrokes = req.body.keys;

    if (!keyStrokes) return _badRequest(res);

    var keys = keyStrokes.replace('^', '^^');

    keys = '"' + keys + '"';

    var cmd = [runner, '-w', windowName, keys].join(' ');

    child.exec(cmd, function (err, stdout, stderr) {
        if (err) return _badRequest(res);

        res.json({received: keyStrokes, encoded: keys});
    });
};

// private methods

function _badRequest(res) {
    res.status(400).json({error: 'Specify keys'});
}