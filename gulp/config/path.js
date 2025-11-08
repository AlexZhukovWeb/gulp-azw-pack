import * as nodePath from 'path'

const rootPath = nodePath.basename(nodePath.resolve())

const srcPath = "./src" // исходники
const buildPath = './build' // сборка

// Пути к каталогам для продакшен проекта
export const path = {
  rootFolder: rootPath,
  srcFolder: srcPath,
  buildFolder: buildPath,
  // Пути к каталогам для разработки проекта
  src: {
    root: srcPath,
    html:`${srcPath}/html/*.html`,
    style: `${srcPath}/styles/**/*.{scss,sass}`,
    js: `${srcPath}/js/app.js`,
    images: {
      // Пути изображений Webp
      imgWebp: [
        `${srcPath}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
        `!${srcPath}/**/favicons/*`
      ],
      // Пути для Newer плагина сравнения дат создания файла
      imgNewer: [
        `${srcPath}/assets/images/**/*.{svg,gif,ico,webp}`,
        `!${srcPath}/**/favicons/*.{jpg,png}`
      ],
      // Пути для всех изображений
      imgAll: [
        `${srcPath}/assets/images/**/*.{svg,gif,ico,webp,avif,jpg,png}`,
        `!${srcPath}/**/favicons/*`
      ]
    },
    favicons: `${srcPath}/assets/favicons/*.{png,svg}`,
    // sprites: './src/assets/icons/*.svg',
    sprites: `${srcPath}/assets/icons/*.svg`,
    fonts: {
      baseFonts: `${srcPath}/assets/fonts/**/*`,
      fontsTff: `${srcPath}/assets/fonts/**/*.{ttf}`,
      fontsToWoff: './src/assets/fonts/**/*.ttf',
    }
  },

  build: {
    root: buildPath, // корневой каталог
    html: `${buildPath}`, // html каталог
    style: `${buildPath}/css/`, // стили
    js: `${buildPath}/js/`, // скрифты
    images: `${buildPath}/assets/images/`, // изображения
    favicons: `${buildPath}/assets/favicons/`, // фавиконки 
    sprites: `${buildPath}/assets/icons/`, // svg сборка спрайтов
    fonts: `${buildPath}/assets/fonts/`, // шрифты
  },

  watching: {
    html: `${srcPath}/html/**/*.html`,
    style: `${srcPath}/styles/**/*.{scss,sass}`,
    js: `${srcPath}/js/**/*.js`,
    images: `${srcPath}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    favicons: `${srcPath}/assets/favicons/*.{png,svg}`,
    sprites: `${srcPath}/assets/icons/*.svg`,
  }
}