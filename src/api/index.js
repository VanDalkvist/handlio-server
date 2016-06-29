// initialization

var express = require('express');
var handleRouter = require('./command-handler.routes');
var mouseRouter = require('./mouse-handler.routes');

// exports

var router = express.Router();

router.all('/api/handle', function (req, res, next) {
    _allowCors(res, next);
});
router.all('/api/mouse/*', function (req, res, next) {
    _allowCors(res, next);
});

router.post('/api/handle', handleRouter.execute);
router.post('/api/mouse/move/horizontal', mouseRouter.moveHorizontally);
router.post('/api/mouse/move/vertical', mouseRouter.moveVertically);

module.exports = router;

// private methods

function _allowCors(res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST");
    next();
}