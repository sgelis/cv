const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const del = require("del");


const paths = {
  dev: {
    scss: {
      src: "src/**/*.scss",
      dest: "src/",
    }
  }
}


gulp.task("scss.dev", function () {
  return gulp.src(paths.dev.scss.src)
             .pipe(sass().on("error", sass.logError))
             .pipe(autoprefixer({overrideBrowserslist: "defaults"}))
             .pipe(gulp.dest(paths.dev.scss.dest));
});


gulp.task("dev", gulp.series("scss.dev"));
