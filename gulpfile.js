'use strict';

var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    sass = require('gulp-sass');

gulp.task('js', function(){
    return gulp.src([])
        .pipe(concat('app.js'))
        .pipe(uglify());
});

gulp.task('scss', function(){
    return gulp.src([
        'style.scss'
    ])
        .pipe(sass())
        //.pipe(uglifycss())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['scss', 'js']);

gulp.task('watch', function() {
    gulp.start(['default']);
    //gulp.watch('app/Resources/js/**/*.js', ['js']);
    gulp.watch('./style.scss', ['scss']);
});