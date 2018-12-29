import {JsonData, Meta} from "./instanceSettings";
import {RangeRaw, ITarget, Range} from "./queryOptions";

export const ServiceStates: any = {
    SUCCESS: 200,
    BAD: 400,
    NOT_FOUND: 404,
    UNAVAILABLE: 503
}

export interface IRequestOptions {
    url: string;
    method: string;
}

export interface IInstanceSettings {
    id: number;
    jsonData: JsonData;
    meta: Meta;
    name: string;
    type: string;
    url: string;
}

export interface IQueryOptions {
    timezone: string;
    panelId: number;
    dashboardId: number;
    range: Range;
    rangeRaw: RangeRaw;
    interval: string;
    intervalMs: number;
    targets: ITarget[];
    maxDataPoints: number;
    scopedVars: any;
}

export interface SeriesResult {
    /**
     * title of target build
     */
    target: string;
    /**
     * time series. It has 2 values:
     *   - first one: it's a value of series. e.g. for status it will be "SUCCESS" or "FAILED"
     *   - second one: it's a timespan
     */
    datapoints: number[][]
}

export interface ServiceRequestOptions {
    subdomain: string;
    endpoint: string;
}

export interface ServiceResult {
    status: string;
    message: string;
}

export interface DropDownDomainList {
    text: string;
    value: string;
}
