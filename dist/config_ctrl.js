///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var RestServiceConfigCtrl;
    return {
        setters:[],
        execute: function() {
            RestServiceConfigCtrl = (function () {
                function RestServiceConfigCtrl($scope) {
                }
                RestServiceConfigCtrl.templateUrl = 'partials/config.html';
                return RestServiceConfigCtrl;
            })();
            exports_1("RestServiceConfigCtrl", RestServiceConfigCtrl);
        }
    }
});
//# sourceMappingURL=config_ctrl.js.map