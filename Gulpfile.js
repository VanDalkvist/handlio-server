// dependencies

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');

// initialization

var tasks = fs.readdirSync('./build');

tasks.forEach(function (taskName) {
    var modulePath = './build/' + taskName;

    if (taskName.indexOf('.task') === -1) return;
    if (fs.lstatSync(modulePath).isDirectory()) return;

    var task = require(modulePath);
    task.init();
});

gulp.task('default', ['jshint', 'tests']);