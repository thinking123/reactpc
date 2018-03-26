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

  tabsLayout() {
    return (
      <ExwRouteTabs
        extra={this.extra}
        route={this.route}
        header={this.header}
        {...this.props} />
    )
  }
}
