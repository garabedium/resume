var gulp  	= require('gulp'),
	sass  		= require('gulp-sass'),
	cleanCSS 	= require('gulp-clean-css'),
	rename		= require('gulp-rename'),
  uglify    = require('gulp-uglify'),
  concat    = require('gulp-concat'),
  resize    = require('gulp-image-resize');

var sassPaths = [
	'assets/scss/bower_components/foundation-sites/scss',
	'assets/scss/bower_components/motion-ui/'
];

// Compile SASS --> CSS
gulp.task('styles', function() {
    gulp.src( './assets/scss/scss/**/*.scss' )
        .pipe(sass({
	        includePaths: sassPaths
        }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'))
});

// Minify JS
gulp.task('scripts', function() {
    gulp.src('./assets/js/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});

// Concat Foundation Files
gulp.task('foundation', function() {
  return gulp.src('./assets/js/foundation/*.js')
    .pipe(concat('foundation.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

// Minify CSS
gulp.task('clean-css', function() {
  return gulp.src('./assets/css/*.css')
  	.pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
});

// Watch Tasks
gulp.task('default',function() {
    gulp.watch('./assets/scss/**/*.scss',['styles','clean-css']);
    gulp.watch('./assets/js/*.js',['scripts']);
    gulp.watch('./assets/js/foundation/*.js',['foundation']);
});