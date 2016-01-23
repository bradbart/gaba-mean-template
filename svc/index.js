var express = require('express'); 
var app = express(); 

/* Grab configuration for the environment */ 
var env = process.env.NODE_ENV || 'development'; 
var config = require('./config/' + env + '.js'); 

/* Final set up for the server. All middleware should be defined before this statement. */
app.use(require('./static-content.middleware')(config)); 
app.listen(config.port || 3000, function() {
    console.log('Server started on port %s in %s mode', config.port || 3000, env); 
}); 
