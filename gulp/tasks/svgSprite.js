/**
 * SVG спрайт
 *
 * Создает svg спрайт
 *
 * Пример использования в css:
 * background: url('sprite-mono.svg#icon-name-view') no-repeat;
 * background-size: 20px;
 *
 * Пример использования в html:
 * <svg width="50" height="50" aria-hidden="true"><use href="#icon-name"></use></svg>
 *
 */

import { src, dest } from 'gulp'

// Сторонние библиотеки
import svgSprite from 'gulp-svg-sprite'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'

export const svgIcons = () => {
  return src(`${app.path.src.sprites}`,{encoding: false})
  .pipe(plugins.plumber({
    errorHandler: plugins.notify.onError(err => ({
      title: 'Ошибка в задаче svgIcons', // заголовок ошибки
      sound: false, // уведомлять звуком
      message: err.message, // описание ошибки
    })),
  }))
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../icons.svg',
        example: true,
      }
    }
  }))
  // .pipe(dest('./build/assets/icons/'))
  .pipe(dest(`${app.path.build.sprites}`))
  .pipe(plugins.browserSync.stream())
}