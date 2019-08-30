var gulp = require('gulp')
    browserSync = require('browser-sync');

    
    gulp.task('browserSync', function() {
        browserSync.init({
            server: {
                baseDir: "./app/"
            }
        });

        gulp.watch( './app/*.html' ).on('change', browserSync.reload );
        gulp.watch('./app/blocks/**/*.css').on('change', browserSync.reload );
    });
