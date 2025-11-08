// Библиотеки
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import browserSync from 'browser-sync'
import sourceMaps from 'gulp-sourcemaps'


export const plugins = {
    plumber: plumber,
    notify: notify,
    newer: newer,
    browserSync: browserSync,
    sourceMaps: sourceMaps
}