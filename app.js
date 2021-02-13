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
            RestangularProvider.setBaseUrl("http://magic-url-api.herokuapp.com");
            RestangularProvider.setRequestSuffix('/');
            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'index.html'
                })
                .state('endPointDetail', {
                    url: '/:slow',
                    templateUrl: 'endpointdetail.html',
                    controller: 'EndPointDetailController',
                })
            $urlRouterProvider.otherwise('/');
        }]);
})();
