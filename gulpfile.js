const gulp = require('gulp')
const babel = require('gulp-babel')
const changed = require('gulp-changed')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')


const paths = {
  src: 'src/**/*.js',
  outputDir: 'dist',
  tests: './dist/test/node/**/*.js'
}

gulp.task('watch', ['build', 'test'], () => {
  gulp.watch(paths.src, ['build', 'test'])
})

gulp.task('test', () => {
  return gulp.src(paths.tests, {read: false})
  // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'nyan'}))
    .on('error', handleError)
})

function handleError(err) {
  gutil.log(gutil.colors.blue(err.toString().split(/([\n\s])+/).join('')))
  this.emit('end')
}

gulp.task('build', () => {

  gulp.src(paths.src)
    .pipe(changed(paths.outputDir))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.outputDir))

})
