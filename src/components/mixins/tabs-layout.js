import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';
import AppBase, {
  $api, $app, $date, $store,
  ExwRouteTabs
} from 'components/scripts/index';

export default class {

  layout = 'tabs';

  get extra() {
    return null;
  }

  get tabItems() {
    return [];
  }

  get route() {
    return {};
  }

  get header() {
    return [];
  }

  topView(){
    return null;
  }

  tabsLayout() {
    return (
      <ExwRouteTabs
        topView={this.topView()}
        extra={this.extra}
        route={this.route}
        header={this.header}
        {...this.props} />
    )
  }
}
