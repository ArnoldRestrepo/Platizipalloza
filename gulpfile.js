const gulp 			= require('gulp'),
	  browserSync 	= require('browser-sync').create();


// Servidor Estatíco
gulp.task('default', () => {
	browserSync.init({
		server: './'
	});

	gulp.watch("./*.html").on('change', browserSync.reload);
	// gulp.watch("./css/*.css").on('change', browserSync.stream());
});