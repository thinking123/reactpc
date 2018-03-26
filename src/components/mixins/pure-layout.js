import AppBase, {$api, $app, $date, $store} from 'components/scripts/index';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';

export default class {

  layout = 'pure';

  childView() {
    return null;
  }

  pureLayout() {
    return (
      <section className="ml4 abs trbl0 webkit-sassui-flex-fixed-bdauto exw-route-tabs ovs-y pure-layout-view">
        {this.childView()}
      </section>
    )
  }
}
