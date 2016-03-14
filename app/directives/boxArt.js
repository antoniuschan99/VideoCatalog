(function() {
    "use strict";

    shomiApp.directive("boxArt", boxArt);

    function boxArt() {

        return function(scope, element, attrs){
            var array = JSON.parse(attrs.boxArt);

            function objectFindByKey(array, key, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key] === value) {
                        return array[i];
                    }
                }

                return null;
            }

            var result = objectFindByKey(array, 'Type', 1);

            element.css({
                'background-image': 'url(' + result.ImageId +')'
            });

        };
    };

})();
