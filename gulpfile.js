const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cleancss = require('gulp-clean-css');
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");

// Paths
const paths = {
    styles: {
        src: './src/css/**/*.scss',
        dest: './dist/css/'
    },
    scripts: {
        src: ['./src/js/library/*.js','./src/js/*.js'],
        dest: './dist/js/'
    },
    html: {
        src: './src/*.html',
        dest: './'
    },
    images: {
        src: './src/images/*',
        dest: './dist/images/'
    }
};

// Tasks
gulp.task("scripts", scripts);
gulp.task("styles", styles);
gulp.task("html", html);
gulp.task("images", images);
gulp.task("default", watch);

// Scripts
function scripts() {
    return gulp.src(paths.scripts.src,{sourcemaps:true})
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('default--dist.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Styles
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
        outputStyle:"compressed"
    }).on("error",sass.logError))
    .pipe(autoprefixer())
    .pipe(cleancss())
    .pipe(concat("default--dist.css"))
    .pipe(gulp.dest(paths.styles.dest));
}

// Html
function html() {
    return gulp.src(paths.html.src)
    .pipe(htmlmin({
        collapseWhitespace:true
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// Images
function images() {
    return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Watch
function watch() {
    gulp.watch(paths.scripts.src,scripts);
    gulp.watch(paths.styles.src,styles);
    gulp.watch(paths.html.src,html);
    gulp.watch(paths.images.src,images);
}