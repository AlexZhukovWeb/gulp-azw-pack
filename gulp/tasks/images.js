/**
 * Оптимизация изображений
 *
 * Уменьшает размер изображений и создает webp, avif форматы
 */

import * as app from '../config/path.js'
import { plugins } from '../config/plugins.js'

// Библиотеки
import { src, dest } from 'gulp'
import gulpAvif from 'gulp-avif'
import webp from 'gulp-webp'
import gulpImage from 'gulp-image'
import imageMin from 'gulp-imagemin'


export const images = () => {
  return src(app.path.src.images.imgWebp, {encoding: false})
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError(err => ({
        title: 'Ошибка в задаче images', // заголовок ошибки
        sound: false, // уведомлять звуком
        message: err.message, // описание ошибки
      })),
    }))

    // Обрботка Avif
    .pipe(plugins.newer(app.path.build.images))
    .pipe(gulpAvif({ quality: 85, speed: 7 }))
    .pipe(dest(app.path.build.images))

    // Обработка Webp
    .pipe(src(app.path.src.images.imgWebp, {encoding: false}))
    .pipe(plugins.newer(app.path.build.images))
    .pipe(webp())
    // .pipe(gulpImage())
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 4,
    }))
    .pipe(dest(app.path.build.images))
    
    // Обработка всех остальных изображений
    .pipe(src(app.path.src.images.imgAll, {encoding: false}))
    .pipe(plugins.newer(app.path.build.images))
    .pipe(gulpImage())
    .pipe(imageMin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 4,
    }))
    .pipe(dest(app.path.build.images))
    .pipe(plugins.browserSync.stream())
}