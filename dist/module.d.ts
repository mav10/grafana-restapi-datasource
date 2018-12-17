import RestServiceDataSource from './datasource';
import { RestServiceDataSourceQueryCtrl } from './query_ctrl';
import { RestServiceConfigCtrl } from './config_ctrl';
declare class RestServiceQueryOptionsCtrl {
    static templateUrl: string;
}
declare class RestServiceDataSourceAnnotationsQueryCtrl {
    static templateUrl: string;
}
export { RestServiceDataSource as Datasource, RestServiceDataSourceQueryCtrl as QueryCtrl, RestServiceConfigCtrl as ConfigCtrl, RestServiceQueryOptionsCtrl as QueryOptionsCtrl, RestServiceDataSourceAnnotationsQueryCtrl as AnnotationsQueryCtrl };
