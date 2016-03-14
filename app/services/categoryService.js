(function() {

    var serviceId = 'categoryService';

    shomiApp.service(serviceId, ['$q', '$http', categoryService]);

    function categoryService($q, $http) {

        this.getCategory = function () {
            var deferred = $q.defer();

            $http.get('resources/feed.json').success(function(data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

    }

})();
