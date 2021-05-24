const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minfy = require('gulp-clean-css');
const rename = require('gulp-rename');
function compilesass() {
    return src('./styles/scss/link.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minfy())
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname + "",
                basename: path.basename + ".min",
                extname: ".css"
            };
        }))
        .pipe(dest('./styles/css'))
// function

}

// watchtask
function watchTask(){
    watch('./styles/scss/**/*.scss', compilesass)
}

// default gulp
exports.default = series(
    compilesass,
    watchTask
);
