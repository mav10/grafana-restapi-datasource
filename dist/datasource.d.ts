/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { IInstanceSettings, IQueryOptions, IRequestOptions, ServiceRequestOptions, ServiceResult } from "./typings/types";
import { ITarget } from "./typings/queryOptions";
export default class RestServiceDataSource {
    private $q;
    id: number;
    name: string;
    type: string;
    url: string;
    private backendSrv;
    private templateSrv;
    private q;
    domains: string[];
    /** @ngInject */
    constructor(instanceSettings: IInstanceSettings, backendSrv: any, templateSrv: any, $q: any);
    /**
     * Return list of domains for dropdown in query editor
     * @returns {string[]}
     */
    getDomains: () => any[];
    GetRootAddress: () => string;
    query: (options: IQueryOptions) => any;
    /**
     *
     * @param {IQueryOptions} queryOptions
     * @param {ITarget} target - current target query. @see collection in IQueryOptions.targets[]
     * @returns {SeriesResult}
     */
    queryOneTarget(target: ITarget): Promise<any>;
    mapResult: (target: ITarget, item: ServiceResult) => any;
    annotationQuery(options: any): void;
    /**
     * Returns last 10 build results for target buildType.
     * @param {buildRequests} request
     * @returns {Promise<IBuildFromResponse>}
     */
    getServiceVersion: (request: ServiceRequestOptions) => Promise<any>;
    doRequest(options: IRequestOptions): any;
}
