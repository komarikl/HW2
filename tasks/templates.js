var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); //авоматическая загрузка плагинов галп

gulp.task('templates', function(){
	return gulp.src('src/templates/**/*.jade')
	.pipe($.jade()) //компилируем jade в html
	.pipe(gulp.dest('dist')) //путь где будут лежать html файлы
	.pipe($.connect.reload()); //перезагружаем сервер
}

	);