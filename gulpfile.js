const eslint = require('gulp-eslint');
const gulp = require('gulp');
const mocha = require('gulp-mocha');

function lint() {
	return gulp
		.src([ 'gulpfile.js', 'src/**/*.js' ])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

function test() {
	return gulp
		.src('tests/tests.js')
		.pipe(mocha());
}

gulp.task('lint', lint);
gulp.task('test', test);
gulp.task('default', gulp.series(lint, test));
