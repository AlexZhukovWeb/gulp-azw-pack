/**
 * Удаления продакшен версии проекта
 *
 * Полностью удаляет каталог build
 */

// Библиотеки
import { src } from 'gulp'
import clean from 'gulp-clean'

// Конфиги
import * as app from '../config/path.js'

export const reset = () => {
  return src(`${app.path.build.root}`,{
    read: false, // запрещаем читать содержимое файлов
    allowEmpty: true, // отключаем ошибки о не существующем каталоге
    })
    .pipe(clean({
      force: true, // разрешаем удаление каталогов и файлов за пределами каталога
    }))
}