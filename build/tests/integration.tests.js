// dependencies

var gulp = require('gulp');
var mocha = require('gulp-mocha');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    gulp.task('integration-tests', function () {
        return gulp.src('tests/integration/**/*.js')
            .pipe(mocha({ reporter: 'spec', timeout: 15000 }));
    });
}