var gulp$ = require('gulp-load-plugins')({lazy: true});

module.exports = function() {
    var gulpHelpers = {
        logInfo: logInfo,
        config: require('../gulp.config.js')()
    };
    return gulpHelpers;

    function logInfo(msg) {
        gulp$.util.log(gulp$.util.colors.blue(msg));
    }
};
