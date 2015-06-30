var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); //авоматическая загрузка плагинов галп

gulp.task('watch',['styles', 'scripts'], function(){
	//для изменения любых файлов jade в папке src запускается задача templates, аналогично для js и css файлов
	gulp.watch('src/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['scripts']);
});
