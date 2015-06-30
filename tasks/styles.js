var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); //авоматическая загрузка плагинов галп

gulp.task('styles', function(){
	return gulp.src('src/styles/main.scss')
	.pipe($.sass({errLogToConsole: true})) //компиляция scss в css
	.pipe($.autoprefixer({browsers: ['last 2 version']})) //добавлям префиксы
	.pipe($.csso()) //минификация
	.pipe(gulp.dest('dist/styles')) //путь, куда кладем преобразованные стили
	.pipe($.connect.reload()); //перезагружаем сервер
});