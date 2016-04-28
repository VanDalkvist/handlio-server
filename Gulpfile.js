var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    gulp.src(['src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
    gulp.src('specs/**/*.js')
        .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('default', ['jshint', 'test']);