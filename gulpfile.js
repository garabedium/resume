var gulp  	= require('gulp'),
	sass  		= require('gulp-sass'),
	cleanCSS 	= require('gulp-clean-css'),
	rename		= require('gulp-rename'),
  uglify    = require('gulp-uglify');
	// install uglify for scripts

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
    gulp.src( './assets/scss/js/app.js' )
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
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
    gulp.watch('./assets/scss/js/*.js',['scripts']);
});