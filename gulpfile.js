/**
 *  Welcome to the Mr. Frontend gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long :)
 */

'use strict';

var gulp = require('gulp');
var fs = require('fs-extra');



/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
var gulpFiles = fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
});

gulpFiles.forEach(function (gulpFile) {
    require('./gulp/' + gulpFile);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});