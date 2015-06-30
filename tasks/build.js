var gulp = require('gulp'); //подключаем галп

//gulp build (вторым параметром в массиве передаются задачии, которые запускаются перед выполнением этой задачи)
gulp.task('build', ['scripts', 'styles']);

// команда по умолчанию, если написать просто gulp
gulp.task('default',['build']);