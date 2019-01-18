const { src, dest } = require('gulp');
const { series, parallel } = require('gulp');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Clean
function clean() {
  return del(['docs/*.*']);
}

// Optimize Images
function images() {
  return src("src/img/**")
    .pipe(newer('docs/img/'))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(dest('docs/img/'));
}

// HTML task
function html() {
  return src(['src/index.html', 'src/favicon.ico'])
  .pipe(newer('docs/'))
  .pipe(dest('docs/'));
}

// CSS task
function css() {
  return src("src/*.css")
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('docs/'));
}

// JS task
function js() {
  return src('src/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('docs/'));
}

const build = series(clean, parallel(css, js, html, images));

exports.build = build;
exports.default = build;