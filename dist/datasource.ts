///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import {
    IInstanceSettings,
    IQueryOptions, IRequestOptions, ServiceRequestOptions, ServiceResult,
} from "./typings/types";
import {ITarget} from "./typings/queryOptions";

export default class RestServiceDataSource {
    id: number;
    name: string;
    type: string;
    url: string;
    private backendSrv: any;
    private templateSrv: any;
    private q: any;
    domains: string[];

    /** @ngInject */
    constructor(instanceSettings: IInstanceSettings, backendSrv: any, templateSrv: any, private $q: any) {
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
     * Return list of domains for dropdown in query editor
     * @returns {string[]}
     */
    getDomains = (): any[] => {
        return this.domains
            .map(domain => ({text: domain, value: domain}));
    }

    GetRootAddress = () => {
        return this.url;
    }

    query = (options: IQueryOptions): any => {
        var promises = options.targets
            .map(target => this.queryOneTarget(target));

        return Promise.all(promises)
            .then(results => ({data: [].concat.apply([], results)}));
    }

    /**
     *
     * @param {IQueryOptions} queryOptions
     * @param {ITarget} target - current target query. @see collection in IQueryOptions.targets[]
     * @returns {SeriesResult}
     */
    queryOneTarget(target: ITarget): Promise<any> {
        const requestOptions = {
            endpoint: target.endpoint,
            subdomain: target.subdomain
        } as ServiceRequestOptions;

        return this.getServiceVersion(requestOptions)
            .then(result => this.mapResult(target, result))
            .catch(resultError => this.mapResult(target, resultError));
    }

    mapResult = (target: ITarget, item: ServiceResult): any => {
        return {
            target: `${target.subdomain} ${item.message}`,
            datapoints: [[parseInt(item.status), new Date().getTime()]]
        }
    }

    annotationQuery(options) {
        console.log('anotationsOptions: ', options)
        throw new Error("Annotation Support not implemented yet.");
    }

    /**
     * Returns last 10 build results for target buildType.
     * @param {buildRequests} request
     * @returns {Promise<IBuildFromResponse>}
     */
    getServiceVersion = (request: ServiceRequestOptions): Promise<any> => {
        var url = "";
        if (this.url.indexOf("https:") != -1)
            url = `${this.url.replace(/^https:\/\//, 'https://' + request.subdomain + '.')}/${request.endpoint}`;
        else if (this.url.indexOf("http:") != -1)
            url = `${this.url.replace(/^http:\/\//, 'http://' + request.subdomain + '.')}/${request.endpoint}`;
        else
            return Promise.reject({status: 'error', message: `getServiceVersion: Unknown root protocol ${this.url}`})

        return this.doRequest({
            url: url,
            method: 'GET'
        } as IRequestOptions)
            .then(result => {
                    return {
                        status: result.status,
                        message: result.data
                    } as ServiceResult
                }
            );
    }

    doRequest(options: IRequestOptions) {
       return this.backendSrv.datasourceRequest(options)
    }
}
