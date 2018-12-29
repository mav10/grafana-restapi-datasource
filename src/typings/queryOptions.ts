export interface Range {
    from: Date;
    to: Date;
    raw: RangeRaw;
}

export interface RangeRaw {
    from: string;
    to: string;
}

/**
 *
 */
export interface ITarget {
    /**
     * intern unique key
     */
    $$hashKey: string;
    /**
     * target root addrest of the service
     */
    root: string;
    /**
     * part of the url after root address
     */
    endpoint: string;
    /**
     * subdomain part of the url before root address
     */
    subdomain: string;
    /**
     * intern unique key
     */
    refId: string;
}