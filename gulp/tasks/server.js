/**
 * Виртуальный сервер
 *
 * Создает виртуальный сервер, автоматически обновляет браузер при изменении файлов.
 */

// Сторонние библиотеки
import browserSync from 'browser-sync'

// Конфиги
import * as app from '../config/path.js'

export const server = () => {
  return browserSync.init({
    server: {
      baseDir: app.path.build.root,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    port: 8080,
    ui: { port: 8081 },
    open: true,
  })
}