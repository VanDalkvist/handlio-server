// initialization

var express = require('express');

// exports

var router = express.Router();

router.all('/api/handle', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST");
    next();
});

router.post('/api/handle', require('./handler'));

module.exports = router;

// private methods
