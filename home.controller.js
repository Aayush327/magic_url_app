(function () {
    'use strict';
    angular.module('MagicUrlApp').controller('HomeController', HomeController);
    HomeController.$inject = ['$scope', 'Restangular'];

    function HomeController($scope, Restangular) {

        let endEndPointUrl = 'endpoints/url'

        let listActiveUrls = function() {
            Restangular.service('').get(endEndPointUrl).then(function (response) {
                $scope.urlList = response.url_list;
            }, function (error) {
                //error message to be filled
                alert('failed to fetch urls');
            });
        }

        $scope.createUrl = function() {
            Restangular.service(endEndPointUrl).post({}).then(function (response) {
                $scope.newUrl = response.url;

            }, function (response) {
                alert('failed to create url');
            });
        };

        listActiveUrls();
    }
})();