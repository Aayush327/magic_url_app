(function () {
    'use strict';
    angular.module('MagicUrlApp').controller('EndPointDetailController', EndPointDetailController);
    EndPointDetailController.$inject = ['$scope', 'Restangular', '$stateParams'];

    function EndPointDetailController($scope, Restangular, $stateParams) {

        let a = 'endpoints/test' + $stateParams.url;
        let latestUrlHits = function() {
            Restangular.service('').get(a).then(function (response) {
                console.log(response)
                $scope.urlList = response.url_list;
            }, function (error) {
                //error message to be filled
                alert('failed to fetch urls');
            });
        }

        latestUrlHits();
    }

})();