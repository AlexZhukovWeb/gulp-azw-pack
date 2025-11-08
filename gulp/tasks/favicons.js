/*
* Фавиконки
*
* Перенос иконок в продакшн версию проекта
*/

import { src, dest } from 'gulp'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'

export const favicons = () => {
    return src(app.path.src.favicons,{encoding: false})
    .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(err => ({
          title: 'Ошибка в задаче favicon', // заголовок ошибки
          sound: false, // уведомлять звуком
          message: err.message, // описание ошибки
        })),
    }))
    .pipe(dest(app.path.build.favicons))
    .pipe(plugins.browserSync.stream())
}

