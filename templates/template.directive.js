(function(module) {
    module.controller('', DirectiveController);
    module.directive('', directive);

    function directive() {
        return {
            restrict: 'EA',
            scope: {},
            link: link,
            controller: 'DirectiveController',
            controllerAs: '',
            templateUrl: ''
        };
    }

    function link(scope, element, attrs) {
    }

    function DirectiveController() {
        var self = this;
    }

}(angular.module('')));
