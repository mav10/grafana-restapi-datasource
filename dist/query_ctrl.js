///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['lodash', 'app/plugins/sdk', './css/query_editor.css!'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lodash_1, sdk_1;
    var RestServiceDataSourceQueryCtrl;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (_1) {}],
        execute: function() {
            RestServiceDataSourceQueryCtrl = (function (_super) {
                __extends(RestServiceDataSourceQueryCtrl, _super);
                /** @ngInject **/
                function RestServiceDataSourceQueryCtrl($scope, $injector, templateSrv) {
                    var _this = this;
                    _super.call(this, $scope, $injector);
                    this.templateSrv = templateSrv;
                    this.defaults = {};
                    this.getDomains = function () {
                        var domains = _this.datasource.getDomains();
                        return ((domains != null) && (domains.length > 0))
                            ? domains
                            : [{ text: 'select domain', value: '' }];
                    };
                    this.getRootAddress = function () {
                        var result = _this.datasource.GetRootAddress();
                        return result.substring(result.indexOf("://") + 3);
                    };
                    lodash_1.default.defaultsDeep(this.target, this.defaults);
                    this.target.root = this.getRootAddress();
                    this.target.subdomain = this.target.subdomain || this.getDomains()[0];
                    this.target.endpoint = this.target.endpoint;
                }
                RestServiceDataSourceQueryCtrl.prototype.onChangeInternal = function () {
                    this.panelCtrl.refresh(); // Asks the panel to refresh data.
                };
                RestServiceDataSourceQueryCtrl.templateUrl = 'partials/query.editor.html';
                return RestServiceDataSourceQueryCtrl;
            })(sdk_1.QueryCtrl);
            exports_1("RestServiceDataSourceQueryCtrl", RestServiceDataSourceQueryCtrl);
        }
    }
});
//# sourceMappingURL=query_ctrl.js.map