(function () {
    'use strict';
    angular.module('MagicUrlApp').controller('EndPointDetailController', EndPointDetailController);
    EndPointDetailController.$inject = ['$scope', 'Restangular', '$stateParams'];

    function EndPointDetailController($scope, Restangular, $stateParams) {

        $scope.url = 'localhost:8080/#!/test/' + $stateParams.url;
        let endpoint = 'endpoints/test/' + $stateParams.url;
        let latestUrlHits = function() {
            Restangular.service('').get(endpoint).then(function (response) {
                $scope.endPointDetailList = response.endpoint_detail_list;
                if (Object.keys($scope.endPointDetailList).length){
                    timeAfterHittingUrl($scope.endPointDetailList[0].time_after_hitting_url);
                }
            }, function (error) {
                //error message to be filled
                alert('failed to fetch urls');
            });
        }

        $scope.convertHeaders = function(headers){
            $scope.headers = JSON.parse(headers.replace(/'/g,"\""))
        }

        let timeAfterHittingUrl = function(time){
            $scope.time_after_hitting_url = Math.floor(time/60);
        }
        latestUrlHits();
    }

})();