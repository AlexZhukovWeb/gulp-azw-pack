/* 
* Архивирование проекта
*
* Создание продакшн архива в .zip формате
*/

import { src, dest } from 'gulp'

// Сторонние библиотеки
import clean from 'gulp-clean'
import zipPlugin from 'gulp-zip'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'

export const zip = () => {
    clean(`./${app.path.rootFolder}.zip`)
    // return src(`${app.path.buildFolder}`)
    return src(`${app.path.buildFolder}/**/**/*.*`)
    .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError(err => ({
        title: 'Ошибка в задаче zip', // заголовок ошибки
        sound: false, // уведомлять звуком
        message: err.message, // описание ошибки
        })),
    }))
    
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    .pipe(dest("./"))
}