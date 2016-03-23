(function() {
    'use strict';

    var controllerId = 'mainController';

    shomiApp.controller(controllerId, ['$scope', '$state', 'mainViewModel', 'config', mainController]);

    function mainController($scope, $state, mainViewModel, config) {
        var beginValue = 0;

        mainViewModel.init(config);

        $scope.mainModel = mainViewModel.model;

        //Set Default Display
        $scope.mainModel.selectBy = 'Item.Title';

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

        $scope.next = function() {
            if (beginValue + 20 < $scope.mainModel.categoryList.Data.length) {
                beginValue = beginValue + 20;
                $scope.mainModel.begin = beginValue;
            }
        }

        $scope.previous = function() {
            beginValue = beginValue - 20;
            $scope.mainModel.begin = beginValue;
        }

        $scope.filterByGenre = function(genreName) {
            $scope.mainModel.genre = genreName;
        }

        $scope.mainModel.selectedGenre = $scope.selectedGenre;
    };


})();
