var gulp = require('gulp'); 
var gultil = require('gulp-util'); 
var coffee = require('gulp-coffee');
var concat = require('gulp-concat'); 

// gulp lets us create different tasks 

var jsSources =['components/scripts/bfalgorithm.js'] // star means any js file, but a specific one can be named. 

gulp.task('log', function() {
	gultil.log('logged a task ')
}); 

gulp.task('js', function() {
	gulp.src('components/scripts/bfalgorithm.js')
		.pipe(concat('script.js')) 
		.pipe(gulp.dest('builds/development/js'))
	gultil.log('wtf')
}); 

// go to terminal run $ gulp js
