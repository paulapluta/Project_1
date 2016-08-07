var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require ("gulp-rename");
var browserSync = require("browser-sync");
var sourcemaps = require("gulp-sourcemaps");

Files = {
    js: ["./js/*.js"],
    scss: ["./scss/*.scss"],
    html: "index.html"
}

gulp.task("sass", function (){
    return gulp.src("./scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename("style.css"))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("default", ["sass"], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(Files.html).on("change", browserSync.reload);
    gulp.watch(Files.scss, ["sass"]);
});
