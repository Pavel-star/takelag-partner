var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),  
    imagemin = require('gulp-imagemin');

    
    gulp.task('imageMin', function(){
        return gulp.src('./app/images/*')
                .pipe( imagemin() )
                .pipe( gulp.dest('./dist/images/') );
    });
    gulp.task('scripts',function(){
        return gulp.src('./app/blocks/**/*.js')
        .pipe( concat('libs.min.js') )
        .pipe( uglify() )
        .pipe( gulp.dest('./app/js/')) ;
    });
    gulp.task('browserSync', function() {
        browserSync.init({
            server: {
                baseDir: "./app/"
            }
        });

        gulp.watch( './app/*.html' ).on('change', browserSync.reload );
        gulp.watch('./app/blocks/**/*.css').on('change', browserSync.reload );
    });
