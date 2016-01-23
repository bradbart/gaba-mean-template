var express = require('express'); 

module.exports = function(config) {
    var router = express.Router(); 
    router.use(function(req, res, next) {
        (req.path.indexOf('.') === -1) && (req.url = '/'); 
        next(); 
    }); 
    config.publicRoots.forEach(function(root) {
        router.use(express.static(config.baseDirectory + root));    
    });
    return router; 
}