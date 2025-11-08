/*
* Продакшн шрифты
*
* Создание woff,woff2 шрифтов .ttf формата
*/

import { src, dest, series } from 'gulp'

// Сторонние библиотеки
import ttfFontsWoff from 'gulp-ttf2woff'
import ttfFontsWoff2 from 'gulp-ttf2woff2'

// Конфиги
import * as app from '../config/path.js'

const configFonts = {
  encoding: false,
  removeBOM: false,
}

export const ttfFonts = () => {
  return src(app.path.src.fonts.baseFonts,configFonts)
    .pipe(dest(app.path.build.fonts))
}

export const tffToWoff = () => {
  return src(app.path.src.fonts.fontsToWoff,configFonts)
    .pipe(ttfFontsWoff())
    .pipe(dest(app.path.build.fonts))
}

export const tffToWoffTwo = () => {
  return src(app.path.src.fonts.fontsToWoff,configFonts)
    .pipe(ttfFontsWoff2())
    .pipe(dest(app.path.build.fonts))
}

export const fonts = series(ttfFonts,tffToWoff,tffToWoffTwo)