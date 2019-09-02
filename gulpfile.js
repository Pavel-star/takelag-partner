var gulp = require('gulp')
    browserSync = require('browser-sync')
    concat = require('gulp-concat')
    imagemin = require('gulp-imagemin');

    
    gulp.task('imageMin', function(){
        return gulp.src('./app/images/*')
                .pipe( imagemin() )
                .pipe( gulp.dest('./dist/images/') );
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
