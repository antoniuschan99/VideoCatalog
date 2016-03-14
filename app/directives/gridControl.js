(function() {
    "use strict";

    shomiApp.directive("gridControl", gridControl);

    function gridControl() {

        return {

            restrict: "E",
            scope: {
                content: "=",
            },

            link: function(scope) {

            },

            templateUrl: "directives/html/grid.html"
        }
    };

})();
