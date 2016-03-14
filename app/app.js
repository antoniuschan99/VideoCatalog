var shomiApp = (function() {

    var appName = 'shomiApp';

    var app = angular.module(appName, [
      'ui.router'
    ]);

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('main', {
                templateUrl: 'views/main.html',
                controller: 'mainController',
                resolve: {
                    config: function (categoryService) {
                        return categoryService.getCategory();
                    }
                }
            });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');

            $state.go('main');
        });
    }]);

    app.run(['$q', '$rootScope', '$state', '$location', 'categoryService',
        function ($q, $rootScope, $state, $location, categoryService) {

            $state.go('main');

        }
    ]);

    return app;

})();
