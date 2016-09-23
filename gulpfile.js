var gulp = require('gulp'); 
var gultil = require('gulp-util'); 
var coffee = require('gulp-coffee');

// gulp lets us create different tasks 

gulp.task('log', function() {
	gultil.log('logged a task '); 
}); 
