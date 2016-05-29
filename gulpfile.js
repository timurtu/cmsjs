const gulp = require('gulp')
const babel = require('gulp-babel')

const paths = {
  testsSrc: 'test/**/*.js',
  outputDir: 'lib'
}

gulp.task('build', () => {

  gulp.src(paths.testsSrc)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.outputDir))

})
