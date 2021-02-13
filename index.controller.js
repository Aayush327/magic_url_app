(function () {
    'use strict';
    angular.module('MagicUrlApp').controller('IndexController', IndexController);
    IndexController.$inject = ['$scope', 'Restangular'];

    function IndexController($scope, Restangular) {

        let listActiveUrls = function() {
            Restangular.service('').get('endpoints/url').then(function (response) {
                $scope.urlList = response.url_list;
            }, function (error) {
                //error message to be filled
                alert('failed to fetch urls');
            });
        }

        $scope.createUrl = function() {
            Restangular.service('endpoints/url').post({}).then(function (response) {
                $scope.newUrl = response.url;

            }, function (response) {
                console.log(response);
            });
        };

        listActiveUrls();
    }

})();