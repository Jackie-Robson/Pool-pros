var gulp = require( 'gulp' );
var nunjucks = require( 'nunjucks' );
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./public/app/pages/**/*.+(html|nunjucks)')
	// adds the data to nunjucks
	.pipe(data(function(){
		return require('./public/app/dealers.json')
	}))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['public/app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('public/app'))


});
