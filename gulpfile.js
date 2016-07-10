var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
global.jQuery = require('jquery');


gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch', function(){
    gulp.watch('./src/sass/*.scss', ['sass']);
})

gulp.task('minify-css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function(){
    return gulp.src('./src/img/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('background', function(){
    return gulp.src('./src/img/bg.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/css'))
});


gulp.task('js', function() {
    return gulp.src('./src/js/**/*')
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('fonts', function() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('clean', function() {
    del('dist');
    return cache.clearAll();
});



gulp.task('default', [ 'sass','minify-css','images','background', 'fonts','js'], function (){
    console.log('Building files');
});