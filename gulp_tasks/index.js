var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var wiredep     = require('wiredep').stream;
var reload      = require('browser-sync').get('app').reload;
var jade        = require('gulp-jade');

var wiredepConfig = {
  devDependencies:true,
  ignorePath: '../bower_components/',
  fileTypes: {
    html: {
      replace: {
        js: '<script src="libs/{{filePath}}"></script>',
        css: '<link rel="stylesheet" href="libs/{{filePath}}" />'
      }
    }
  }
}

gulp.task('index', function () {
  return gulp.src(gulp.paths.index_view)
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(wiredep(wiredepConfig))
    .pipe(gulp.dest(gulp.paths.dist))
    .pipe(reload({stream:true}));
});
