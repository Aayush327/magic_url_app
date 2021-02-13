(function () {
    'use strict';
    angular
        .module('MagicUrlApp', [
            'restangular',
            'ui.router',
            // 'ngCookies',
            // 'ngMaterial',
        ])
        .config(['RestangularProvider', '$stateProvider', '$urlRouterProvider',function (
            RestangularProvider, $stateProvider, $urlRouterProvider
        ) {
            RestangularProvider.setBaseUrl("http://127.0.0.1:8000");
            RestangularProvider.setRequestSuffix('/');
            let index = {
                name: 'index',
                url: '/',
                templateUrl: 'index.html',
                controller: 'IndexController'
            };
    
            let endPointDetail = {
                name: 'endPointDetail',
                url: '/pp',
                templateUrl: 'endpointdetail.html',
                controller: 'EndPointDetailController'
                // resolve: {
                //     url : function($transition$){
                //         return $transition$.params().url;
                //     }
                // }
            };

            $stateProvider.state(index);
            $stateProvider.state(endPointDetail);
            $urlRouterProvider.otherwise('/pp');
        }]);
})();
