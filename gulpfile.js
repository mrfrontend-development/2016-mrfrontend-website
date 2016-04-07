var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/sass/style.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/resoure/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve', 'sass'], function () {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});