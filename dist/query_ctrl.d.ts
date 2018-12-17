/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import { DropDownDomainList } from "./typings/types";
export declare class RestServiceDataSourceQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    defaults: {};
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any);
    getDomains: () => DropDownDomainList[];
    getRootAddress: () => string;
    onChangeInternal(): void;
}
