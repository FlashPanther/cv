'use strict';

var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    sass = require('gulp-sass');

gulp.task('js', function(){
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery.easing/js/jquery.easing.js',
        'bower_components/wow/dist/wow.js',
        'js/page-scroll.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./'))
        //.pipe(uglify())
        ;
});

gulp.task('screen', function(){
    return gulp.src([
        'bower_components/wow/css/libs/animate.css',
        'screen.scss'
    ])
        .pipe(sass())
        //.pipe(uglifycss())
        .pipe(concat('screen.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('print', function(){
    return gulp.src([
        'print.scss'
    ])
        .pipe(sass())
        //.pipe(uglifycss())
        .pipe(concat('print.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('fonts', function(){
    return gulp.src([
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*'
    ])
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('default', ['screen', 'print', 'js', 'fonts']);

gulp.task('watch', function() {
    gulp.start(['default']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./style.scss', ['scss']);
});