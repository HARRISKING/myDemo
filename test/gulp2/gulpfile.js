    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var cssnano = require('gulp-cssnano');

    gulp.task('build:css',function(){
      return gulp.src('./src/css/*.css')
      .pipe(concat('all.css'))
      .pipe(cssnano())
      .pipe(gulp.dest('./dist/'));
    });
