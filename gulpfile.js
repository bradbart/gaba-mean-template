require('gaba-gulp-tasks')({
    appModule: '',
    fonts: [
        'bower_components/bootstrap/fonts/**/*.*'
    ], 
    assets: [
        'app/assets/**/*.*'
    ], 
    karma: {
        configPath: __dirname + '/karma.conf.js' }
    }).allTasks();