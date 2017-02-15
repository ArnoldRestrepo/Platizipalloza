const gulp 			= require('gulp'),
	  browserSync 	= require('browser-sync').create();


// Servidor Estatíco
gulp.task('serve', () => {
	browserSync.init({
		server: './'
	});

	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp