'use strict';

var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var path = require('path');
var babel = require('gulp-babel');

const paths = {
  jsSource: ['./public/app/**/*.js'],
  serverSource: ['./server/**/*.js']
};


gulp.task('js', () =>  {
  return gulp.src(paths.jsSource)
  .pipe(sourcemaps.init())
  .pipe(plumber({compact: false}))
  .pipe(babel({presets: ["es2015"]}))
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write('./'))
  // .pipe(annotate())
  // .pipe(uglify())
  .pipe(gulp.dest('./public/pub'));
});

gulp.task('clean', function (cb) {
    del([
        './public/pub'
    ], cb);
});

// gulp.task('server', () => {
//   return gulp.src(paths.serverSource)
//   .pipe(plumber())
//   .pipe(babel({
//     presets: ["es2015"]
//   }))
//   .pipe(gulp.dest('./dist'));
// });


gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['js']);
    // gulp.watch(paths.serverSource, ['server']);
});

gulp.task('default', ['js']);
