(function() {
    'use strict';

    var controllerId = 'mainController';

    shomiApp.controller(controllerId, ['$scope', '$state', 'mainViewModel', 'config', mainController]);

    function mainController($scope, $state, mainViewModel, config) {

        mainViewModel.init(config);

        $scope.mainModel = mainViewModel.model;

        $scope.selectByTitle = function () {
            $scope.mainModel.selectBy = 'Item.Title';
            $scope.mainModel.reverse = false;
        };

        $scope.selectByDuration = function () {
            $scope.mainModel.selectBy = 'Item.RunTimeSec';
            $scope.mainModel.reverse = true;
        };

        $scope.selectByReleaseYear = function () {
            $scope.mainModel.selectBy = 'Item.ReleaseYear';
            $scope.mainModel.reverse = true;
        };

        $scope.formatNumber = function(number) {
            console.log(number);
            return number/60;
        }

    };


})();
