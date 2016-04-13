var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    gulp.src(['test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('test', function() {
    gulp.src('specs/**/*.js')
        .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('default', ['jshint', 'test']);