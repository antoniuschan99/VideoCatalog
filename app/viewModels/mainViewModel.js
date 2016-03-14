(function() {
    "use strict";

    var modelId = "mainViewModel";

    shomiApp.service(modelId, [mainViewModel]);

    function mainViewModel() {

        this.model = {
            categoryList: null
        };

        this.init = function (config) {

            this.model.categoryList = config;

            return true;
        };

        return this;
    }

})();
