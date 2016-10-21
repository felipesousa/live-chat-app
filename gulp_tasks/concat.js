var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var concat        = require('gulp-concat');
var ngAnnotate    = require('gulp-ng-annotate');
var reload        = require('browser-sync').get('app').reload;

gulp.task('concat', function() {
  return gulp.src(gulp.paths.scripts)
    .pipe(plumber())
    .pipe(concat('application.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
