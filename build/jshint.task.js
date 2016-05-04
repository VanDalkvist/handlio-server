// dependencies
var gulp = require('gulp');
var jshint = require('gulp-jshint');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    gulp.task('jshint', function () {
        return gulp.src(['src/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
}