import { src, dest } from 'gulp'

// Сторонние библиотеки
import fileInclude from 'gulp-file-include'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'


export const html = () => {
    return src(app.path.src.html)
    .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(err => ({
          title: 'Ошибка в задаче html', // заголовок ошибки
          sound: false, // уведомлять звуком
          message: err.message, // описание ошибки
        })),
    }))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(app.path.build.html))
    .pipe(plugins.browserSync.stream())
}