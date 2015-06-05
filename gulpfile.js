var gulp = require('gulp'); 
var gulp$ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config.js')(); 

console.log('Adding something dumb to test');

gulp.task('compile-less', function() {
    logInfo('Compile LESS to CSS'); 
    return gulp.src(config.styles.less)
        .pipe(gulp$.plumber())
        .pipe(gulp$.less())
        .pipe(gulp$.concat(config.styles.compiledDest))
        .pipe(gulp.dest(config.styles.directory)); 
}); 

gulp.task('wire-dep', function() {
    logInfo('Inject dependencies into index.html');
    var wiredep = require('wiredep').stream;    
    var injectSource = gulp.src(config.js.concat(config.styles.css), {read: false}); 
    
    return gulp.src(config.index)
        .pipe(wiredep(config.wiredepOptions))
        .pipe(gulp$.inject(injectSource))
        .pipe(gulp.dest(config.appRoot));
}); 

/* Watcher Tasks */
gulp.task('watch-dev', ['watch-less', 'watch-new-js'], function() {
    logInfo('Set up watchers to facilitate development'); 
}); 

gulp.task('watch-less', function() {
    logInfo('Watch changes to LESS and run "compile-less"'); 
    gulp.watch([config.styles.less], ['compile-less']); 
}); 

gulp.task('watch-new-js', function() {
    logInfo('Watch for new and removed JS files and run "wire-dep"'); 
    gulp$.watch(config.js, { events: ['add', 'unlink']}, function () {
         gulp.start('wire-dep');
   });  
}); 

/* Utilities for tasks */
function logInfo(msg) {
    gulp$.util.log(gulp$.util.colors.blue(msg));  
}
