var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-minify-css');
var reload      = require('browser-sync').get('app').reload;

gulp.task('sass', function() {
  return gulp.src(gulp.paths.sass)
    .pipe(plumber())
    .pipe(concat('application.min.css'))
    .pipe(sass())
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
