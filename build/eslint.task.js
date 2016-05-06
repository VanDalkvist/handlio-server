// dependencies

var gulp = require('gulp');
var eslint = require('gulp-eslint');

// exports

module.exports = {
    init: _init
};

// initialization

// private methods

function _init() {
    gulp.task('lint', function () {
        return gulp.src(['**/*.js','!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });
}