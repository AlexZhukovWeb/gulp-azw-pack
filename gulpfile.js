import { watch, parallel, series } from 'gulp'
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


global.app = {
  path: path,
  plugins: plugins
}

// Таски
import { server } from './gulp/tasks/server.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { styles } from './gulp/tasks/styles.js'
import { js } from './gulp/tasks/scripts.js'
import { images } from './gulp/tasks/images.js'
import { fonts } from './gulp/tasks/fonts.js'
import { favicons } from './gulp/tasks/favicons.js';
import { svgIcons } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';


const mainTasks = series(
  fonts,
  parallel(
    html,
    styles,
    js,
    images,
    favicons,
    svgIcons
  )
)

export const watchDev = () => {
    watch(path.watching.html,html)
    watch(path.watching.style,styles)
    watch(path.watching.js,js)
    watch(path.watching.images,images)
    watch(path.watching.favicons,favicons)
    watch(path.watching.sprites,svgIcons)
}

export const buildProject = series(reset, mainTasks)
export const createZip = series(reset,mainTasks,zip)
export const devProject = series(reset, mainTasks, parallel(server,watchDev))
export const del = reset

export default devProject