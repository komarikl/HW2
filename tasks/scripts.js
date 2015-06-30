var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); //авоматическая загрузка плагинов галп

gulp.task('scripts', function(){
	return gulp.src('src/scripts/app.js')
	.pipe($.browserify({debug: true})) //объединяем файлы с помощью браузерефи
	.pipe($.uglify()) //минификация
	.pipe(gulp.dest('dist/scripts/')) //путь до сформированного файла
	.pipe($.connect.reload()); //перезагружаем сервер
}

	);