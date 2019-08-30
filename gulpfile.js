var gulp = require('gulp')
    browserSync = require('browser-sync');

    
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./app/"
            }
        });

        gulp.watch( './app/index.html' ).on('change', browserSync.reload );
        gulp.watch('./app/blocks/**/*.css').on('change', browserSync.reload );
    });
