// dependencies

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    gulp.task('unit-test-with-cover', function () {
        return gulp.src('tests/unit/**/*.js', { read: false })
            .pipe(cover.instrument({
                pattern: ['src/**/*.js', 'bin/www']
            }))
            .pipe(mocha({ timeout: 30000 }))
            .pipe(cover.gather())
            .pipe(cover.format(['html', 'lcov']))
            .pipe(gulp.dest('reports'));
    });
}