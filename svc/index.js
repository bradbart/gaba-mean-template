var express = require('express'); 
var app = express(); 

/* Grab configuration for the environment */ 
var env = process.env.NODE_ENV || 'development'; 
var config = require('./config/' + env + '.js'); 

/* Define static contents and root of angular application */ 
var publicRoot = __dirname + '/' + config.publicRoot;
app.use(express.static(publicRoot));
app.get('/*', function(request, response) {
    response.sendFile(config.indexPath, {root: publicRoot});
});

/* Start the server */
var server = app.listen(config.port || 3000, function() {
    var host = server.address().address; 
    host = host === '::' ? 'localhost' : host; 
    var port = server.address().port; 
    console.log('Server started on http://%s:%s in %s mode', 
        host, port, env); 
}); 
