var express = require('express'); 
var app = express(); 

var env = process.env.NODE_ENV || 'development'; 
var config = require('./config/' + env + '.js'); 

app.use(express.static(__dirname + '/..'));
app.get('/', function(request, response) {
    response.sendFile('app/index.html', {root: __dirname + '/..'});
});

var server = app.listen(config.port || 3000, function() {
    var host = server.address().address; 
    host = host === '::' ? 'localhost' : host; 
    var port = server.address().port; 
    console.log('Server started on http://%s:%s in %s mode', 
        host, port, env); 
}); 
