var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minhtml = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin'); 

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(minhtml({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(argument) {
    gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function(argument){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default',['html','js','img','css']);
