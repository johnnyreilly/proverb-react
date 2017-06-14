'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var src = './styles/main.less';
var dest = './dist/styles';

function compile(options) {
  function run(done) {
    return gulp.src(src)
      .on('end', function() { done(); })
      .pipe(gulpif(options.isDevelopment, sourcemaps.init()))
      .pipe(less({
          paths: [
              '.',
              './node_modules'
          ]
      }).on('error', gutil.log))
      .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(gulpif(!options.isDevelopment, cssmin()))
      .pipe(gulpif(!options.isDevelopment, rename(function (path) {
        path.basename += '-' + new Date().toISOString().replace(/:/g, '-');
      })))
      .pipe(gulpif(options.isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest(dest));
  }

  if (options.shouldWatch) {
    gulp.watch(src, function() { run(); });
  }

  run(options.done);
}

module.exports = {
  build: function(done) { return compile({ isDevelopment: false, shouldWatch: false, done: done }); },
  watch: function(done) { return compile({ isDevelopment: true,  shouldWatch: true,  done: done }); }
};
