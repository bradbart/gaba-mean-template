var express = require('express'); 
var app = express(); 

/* Grab configuration for the environment */ 
var env = process.env.NODE_ENV || 'development'; 
var config = require('./config/' + env + '.js'); 

serveStaticContent(); 
var server = startServer(); 

function serveStaticContent() {
    var publicRoot = __dirname + '/' + config.publicRoot;
    app.use(express.static(publicRoot));
    if(config.debug) {
        app.use(express.static(publicRoot + '/app'));
    }
    app.get('/*', function(request, response) {
        response.sendFile(config.indexPath, {root: publicRoot});
    });
}

function startServer() {
     return app.listen(config.port || 3000, function() {
        var host = server.address().address; 
        host = host === '::' ? 'localhost' : host; 
        var port = server.address().port; 
        console.log('Server started on http://%s:%s in %s mode', 
            host, port, env); 
     }); 
}