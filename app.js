(function () {
    'use strict';
    angular
        .module('MagicUrlApp', [
            'restangular',
            'ui.router',
        ])
        .config(['RestangularProvider', '$stateProvider', '$urlRouterProvider', function (
            RestangularProvider, $stateProvider, $urlRouterProvider
        ) {
            RestangularProvider.setBaseUrl("http://localhost:8000");
            RestangularProvider.setRequestSuffix('/');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home.html',
                    controller: 'HomeController'
                })
                .state('endPointDetail', {
                    url: '/test/:url',
                    templateUrl: 'endpointdetail.html',
                    controller: 'EndPointDetailController'
                })
            $urlRouterProvider.otherwise('/home');
        }]);
})();
