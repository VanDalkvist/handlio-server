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
    gulp.task('tests', function () {
        return gulp.src('tests/**/*.js', { read: false })
            .pipe(cover.instrument({
                pattern: ['src/**/*.js', 'bin/www']
            }))
            .pipe(mocha({ reporter: 'spec', timeout: 15000 }))
            .pipe(cover.gather())
            .pipe(cover.format(['html', 'lcov']))
            .pipe(gulp.dest('reports'));
    });
}