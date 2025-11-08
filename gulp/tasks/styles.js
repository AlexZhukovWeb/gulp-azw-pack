/** 
* SASS Препроцессор
*
* Объединяет указанные scss файлы в один общий css файл и минифицирует 
*/  

import { src, dest } from 'gulp'

// Сторонние библиотеки
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import concat from 'gulp-concat'
import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'


const sass = gulpSass(dartSass)

export const styles = () => {
  return src(app.path.src.style)
  .pipe(sass().on('error', sass.logError))
  .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError(err => ({
        title: 'Ошибка в задаче styles', // заголовок ошибки
        sound: false, // уведомлять звуком
        message: err.message, // описание ошибки
      })),
    }))
  .pipe(autoPrefixer())
  .pipe(concat('style.min.css'))
  .pipe(cleanCss({level: {1: {specialComments: 0}}}))
  .pipe(plugins.sourceMaps.write())
  .pipe(dest(app.path.build.style))
  .pipe(plugins.browserSync.stream())
}