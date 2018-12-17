import RestServiceDataSource from './datasource';
import {RestServiceDataSourceQueryCtrl} from './query_ctrl';
import {RestServiceConfigCtrl} from './config_ctrl';

class RestServiceQueryOptionsCtrl {
    static templateUrl = 'partials/query.options.html';
}

class  RestServiceDataSourceAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
    RestServiceDataSource as Datasource,
    RestServiceDataSourceQueryCtrl as QueryCtrl,
    RestServiceConfigCtrl as ConfigCtrl,
    RestServiceQueryOptionsCtrl as QueryOptionsCtrl,
    RestServiceDataSourceAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
