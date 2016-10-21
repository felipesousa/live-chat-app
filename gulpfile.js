var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var requireDir  = require('require-dir');
var gulpsync    = require('gulp-sync')(gulp);

browserSync.create('app');

gulp.paths = {
  index_view: 'source/index.jade',
  components_views: [
    'source/components/**/*.jade',
    'source/common/**/*.jade'
  ],
  sass: 'source/components/**/*.styles.sass',
  scripts: [
    'source/*.js',
    'source/common/**/*.module.js',
    'source/components/**/*.module.js',
    'source/common/**/*.services.js',
    'source/components/**/*.services.js',
    'source/common/**/*.controller.js',
    'source/components/**/*.controller.js'
  ],

  fonts: 'source/assets/fonts/',
  images: 'source/assets/images/',
  libs: 'www/libs',
  dist: 'www'
};

requireDir('gulp_tasks');

gulp.task('compile', gulpsync.sync(['concat','index','jade','sass','bower-files','assets']));
gulp.task('serve', gulpsync.sync(['compile','browsersync']));

gulp.task('default', ['serve']);
