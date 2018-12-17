///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import {QueryCtrl} from 'app/plugins/sdk';
import './css/query_editor.css!';
import {DropDownDomainList} from "./typings/types";

export class RestServiceDataSourceQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

  defaults = {
  };

  /** @ngInject **/
  constructor($scope, $injector, private templateSrv) {
    super($scope, $injector);
    _.defaultsDeep(this.target, this.defaults);
      this.target.root = this.getRootAddress();
      this.target.subdomain = this.target.subdomain || this.getDomains()[0];
      this.target.endpoint = this.target.endpoint;
  }

  getDomains = (): DropDownDomainList[] => {
      const domains = this.datasource.getDomains();
      return ((domains != null) && (domains.length > 0))
          ? domains
          : [{text: 'select domain', value: ''} as DropDownDomainList];
  }

  getRootAddress = (): string => {
      const result = this.datasource.GetRootAddress();
      return result.substring(result.indexOf("://") + 3)
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }
}
