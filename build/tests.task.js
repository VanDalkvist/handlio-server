// dependencies

var gulp = require('gulp');
var integration = require('./tests/integration.tests');
var unit = require('./tests/unit-and-cover.tests');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    integration.init();
    unit.init();

    gulp.task('tests', ['integration-tests', 'unit-test-with-cover']);
}