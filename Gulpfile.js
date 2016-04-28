var gulp = require('gulp');
var fs = require('fs');

var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

gulp.task('jshint', function() {
    gulp.src(['src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('integration-tests', function() {
    gulp.src('tests/integration/**/*.js')
        .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('unit-test-with-cover', function () {
    _makeDir('coverage');

    return gulp.src('tests/**/*.js', { read: false })
        .pipe(cover.instrument({
            pattern: ['src/**/*.js', 'bin/www'],
            debugDirectory: 'coverage'
        }))
        .pipe(mocha())
        .pipe(cover.gather())
        .pipe(cover.format())
        .pipe(gulp.dest('reports'));
});

gulp.task('tests', ['integration-tests', 'unit-test-with-cover']);

gulp.task('default', ['jshint', 'tests']);

function _makeDir(name) {
    try {
        fs.mkdirSync(name);
    } catch (e) {
        if (e.code === 'EEXIST') console.log('Directory already exist.');
        else console.error('Error during creating directory' + e);
    }
}