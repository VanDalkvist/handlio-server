var gulp = require('gulp');
var fs = require('fs');

var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');
var coveralls = require('gulp-coveralls');

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
    return gulp.src('tests/**/*.js', { read: false })
        .pipe(cover.instrument({
            pattern: ['src/**/*.js', 'bin/www']
        }))
        .pipe(mocha())
        .pipe(cover.gather())
        .pipe(cover.format(['html', 'lcov']))
        .pipe(gulp.dest('reports'));
});

gulp.task('tests', ['integration-tests', 'unit-test-with-cover']);

gulp.task('default', ['jshint', 'tests']);

gulp.task('coveralls', [], function() {
    return gulp.src('reports/coverage.lcov')
        .pipe(coveralls());
});

/**
 * todo: turn on when codecov will work.
 * "gulp-codecov": "^2.0.1",
 *
 var codecov = require('gulp-codecov');

 gulp.task('codecov', function () {
    return gulp.src('./reports/coverage.lcov')
        .pipe(codecov());
});
 */