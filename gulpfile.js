/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var tslint = require("gulp-tslint");

var less = require('./gulp/less');
var webpack = require('./gulp/webpack');
var staticFiles = require('./gulp/staticFiles');
var tests = require('./gulp/tests');
var clean = require('./gulp/clean');
var inject = require('./gulp/inject');

var eslintSrcs = ['./webpack.config.*.js', './gulp/**/*.js'];

gulp.task('delete-dist', function (done) {
  clean.run(done);
});

gulp.task('build-css', ['delete-dist'], function(done) {
  less.build(done);
});

gulp.task('build-js', ['delete-dist'], function(done) {
  webpack.build(done);
});

gulp.task('build-other', ['delete-dist'], function() {
  staticFiles.build();
});

gulp.task('build', ['build-js', 'build-css', 'build-other'], function () {
  inject.build();
});

gulp.task('watch-js', ['delete-dist'], function (done) {
  webpack.watch(done)
});

gulp.task('watch-css', ['delete-dist'], function (done) {
  less.watch(done)
});

gulp.task('watch', ['watch-js', 'watch-css'], function() {
  inject.watch();
  gulp.watch(eslintSrcs, ['eslint']);
  staticFiles.watch();
  tests.watch();
});

gulp.task('serve', ['watch'], function() {
  // local as not required for build
  var express = require('express')
  var app = express()

  app.use(express.static('dist', {'index': 'index.html'}))
  app.listen(7777);
});