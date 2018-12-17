///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register([], function(exports_1) {
    var RestServiceDataSource;
    return {
        setters:[],
        execute: function() {
            RestServiceDataSource = (function () {
                /** @ngInject */
                function RestServiceDataSource(instanceSettings, backendSrv, templateSrv, $q) {
                    var _this = this;
                    this.$q = $q;
                    /**
                     * Return list of domains for dropdown in query editor
                     * @returns {string[]}
                     */
                    this.getDomains = function () {
                        return _this.domains
                            .map(function (domain) { return ({ text: domain, value: domain }); });
                    };
                    this.GetRootAddress = function () {
                        return _this.url;
                    };
                    this.query = function (options) {
                        var promises = options.targets
                            .map(function (target) { return _this.queryOneTarget(target); });
                        return Promise.all(promises)
                            .then(function (results) { return ({ data: [].concat.apply([], results) }); });
                    };
                    this.mapResult = function (target, item) {
                        return {
                            target: target.subdomain + " " + item.message,
                            datapoints: [[parseInt(item.status), new Date().getTime()]]
                        };
                    };
                    /**
                     * Returns last 10 build results for target buildType.
                     * @param {buildRequests} request
                     * @returns {Promise<IBuildFromResponse>}
                     */
                    this.getServiceVersion = function (request) {
                        var url = "";
                        if (_this.url.indexOf("https:") != -1)
                            url = _this.url.replace(/^https:\/\//, 'https://' + request.subdomain + '.') + "/" + request.endpoint;
                        else if (_this.url.indexOf("http:") != -1)
                            url = _this.url.replace(/^http:\/\//, 'http://' + request.subdomain + '.') + "/" + request.endpoint;
                        else
                            return Promise.reject({ status: 'error', message: "getServiceVersion: Unknown root protocol " + _this.url });
                        return _this.doRequest({
                            url: url,
                            method: 'GET'
                        })
                            .then(function (result) {
                            return {
                                status: result.status,
                                message: result.data
                            };
                        });
                    };
                    this.name = instanceSettings.name;
                    this.id = instanceSettings.id;
                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.domains = instanceSettings.jsonData.domains;
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.q = $q;
                }
                /**
                 *
                 * @param {IQueryOptions} queryOptions
                 * @param {ITarget} target - current target query. @see collection in IQueryOptions.targets[]
                 * @returns {SeriesResult}
                 */
                RestServiceDataSource.prototype.queryOneTarget = function (target) {
                    var _this = this;
                    var requestOptions = {
                        endpoint: target.endpoint,
                        subdomain: target.subdomain
                    };
                    return this.getServiceVersion(requestOptions)
                        .then(function (result) { return _this.mapResult(target, result); })
                        .catch(function (resultError) { return _this.mapResult(target, resultError); });
                };
                RestServiceDataSource.prototype.annotationQuery = function (options) {
                    console.log('anotationsOptions: ', options);
                    throw new Error("Annotation Support not implemented yet.");
                };
                RestServiceDataSource.prototype.doRequest = function (options) {
                    return this.backendSrv.datasourceRequest(options);
                };
                return RestServiceDataSource;
            })();
            exports_1("default", RestServiceDataSource);
        }
    }
});
//# sourceMappingURL=datasource.js.map