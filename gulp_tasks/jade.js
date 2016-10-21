var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var jade        = require('gulp-jade');
var reload      = require('browser-sync').get('app').reload;
var flatten     = require('gulp-flatten');

gulp.jadeTask = function (filePath) {
  return gulp.src(filePath)
    .pipe(plumber())
    .pipe(jade())
    .pipe(flatten())
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
};

gulp.task('jade', function () {
  return gulp.jadeTask(gulp.paths.components_views);
});
