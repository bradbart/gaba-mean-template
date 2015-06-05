(function(module){
    module.controller('TestController', function() {
        var self = this; 
        self.items = ['Item 1', 'Item 2', 'Item 3']; 
        self.title = 'Testing';
    }); 
}(angular.module('testApp'))); 