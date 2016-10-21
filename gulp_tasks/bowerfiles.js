var gulp        = require('gulp');
var concat      = require('gulp-concat');
var bowerFiles  = require('main-bower-files');
var reload      = require('browser-sync').get('app').reload;

gulp.task('bower-files', function() {
  gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(gulp.paths.dist+'/libs'))
    .pipe(reload({stream:true}));
});
