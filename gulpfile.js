'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass'); // for sass
var uglifycss = require('gulp-uglifycss'); // for css
var uglify = require('gulp-uglify'); // for JS
var imagemin = require('gulp-imagemin'); // for images
var concat = require('gulp-concat'); // for merging and compressing



gulp.task('message', function(){
    return console.log('All systems are go...');
});
 

// Turn sass into css and merge
gulp.task('sass', function() {
    return gulp.src('workspace/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('sassstyle.css'))
    .pipe(gulp.dest('workspace/css'));
});



// Compress and "merge"
gulp.task('css', function(){
    return gulp.src('workspace/css/*.css')
    .pipe(concat('style.css'))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
    .pipe(gulp.dest('pub/css'));
});


// compress and "merge" JavaScript
gulp.task('minify', function(){
    return gulp.src('workspace/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('pub/js'));
});



// copy html files
gulp.task('copyhtml', function() {
return gulp.src('workspace/*.html')
.pipe(gulp.dest('pub/'));
});


// optimize images
gulp.task('imageMin', () =>
gulp.src('workspace/images/*')
.pipe(imagemin())
.pipe(gulp.dest('pub/images')));



// Automate moving and compressing process 

gulp.task('run', ['sass', 'css', 'minify', 'copyhtml', 'imageMin']);

// Listens for changes in all folders of the workspace
gulp.task('watch', function(){
    gulp.watch('workspace/sass/*.scss', ['sass']);
    gulp.watch('workspace/css/*.css', ['css']);
    gulp.watch('workspace/js/*.js', ['minify']);
    gulp.watch('workspace/*.html', ['copyhtml']);
    gulp.watch('workspace/images/*', ['imageMin']);
});


gulp.task('default', ['message', 'run', 'watch']); /* Starta med gulp, sluta med ctr + C. Kör igång alla watchers och kör default */