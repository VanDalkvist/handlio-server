// dependencies

var gulp = require('gulp');
var coveralls = require('gulp-coveralls');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    gulp.task('coveralls', [], function () {
        return gulp.src('reports/coverage.lcov')
            .pipe(coveralls());
    });
}