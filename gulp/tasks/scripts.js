/**
 * Webpack
 *
 * Сборка и минификация javascript.
 */

import { src, dest} from 'gulp'

// Сторонние библиотеки
import webpackStream from 'webpack-stream'

// Конфиги
import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'
import webpackConfig from '../../webpack.config.js'

// Сборка и минификация javascript
export const js = () => {
  return src(app.path.src.js)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError(err => ({
        title: 'Ошибка в задаче JS', // заголовок ошибки
        sound: false, // уведомлять звуком
        message: err.message, // описание ошибки
      })),
    }))
    .pipe(plugins.sourceMaps.write())
    .pipe(webpackStream(webpackConfig))
    .pipe(dest(app.path.build.js))
    .pipe(plugins.browserSync.stream())
}