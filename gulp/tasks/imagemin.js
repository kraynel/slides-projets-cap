'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,plumber  = require('gulp-plumber')
    ,paths    = require('../paths')

module.exports = gulp.task('build-image', function () {
  return gulp.src(paths.source.img)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.img));
});
