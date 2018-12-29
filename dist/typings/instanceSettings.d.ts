export interface JsonData {
    keepCookies: any[];
    tlsAuth: boolean;
    tlsAuthWithCACert: boolean;
    domains: string[];
}
export interface Author {
    name: string;
    url: string;
}
export interface Link {
    name: string;
    url: string;
}
export interface Logos {
    small: string;
    large: string;
}
export interface Info {
    author: Author;
    description: string;
    links: Link[];
    logos: Logos;
    screenshots?: any;
    version: string;
    updated: string;
}
export interface Dependencies {
    grafanaVersion: string;
    plugins: any[];
}
export interface Meta {
    type: string;
    name: string;
    id: string;
    info: Info;
    dependencies: Dependencies;
    includes?: any;
    module: string;
    baseUrl: string;
    annotations: boolean;
    metrics: boolean;
    alerting: boolean;
    explore: boolean;
    logs: boolean;
    routes?: any;
}
