// initialization

var express = require('express');
var handleRouter = require('./handler.routes');
var errorsRouter = require('./errors.routes');

// exports

var router = express.Router();

router.all('/api/handle', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST");
    next();
});

router.post('/api/handle', handleRouter.execute);

router.use(errorsRouter['404']);

if (router.get('env') === 'development') {
    router.use(errorsRouter['500forDev']);
}

router.use(errorsRouter['500']);

module.exports = router;

// private methods
