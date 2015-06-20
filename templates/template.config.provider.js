(function(module) {
    module.provider('', configProvider);

    function configProvider() {
        var config = {
        };
        return {
            $get: get,
        };

        function get() {
            return config;
        }
    }
}(angular.module('')));
