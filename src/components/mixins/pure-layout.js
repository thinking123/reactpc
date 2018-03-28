import AppBase, {$api, $app, $date, $store} from 'components/scripts/index';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';
import classNames from 'classnames';

export default class {

  layout = 'pure';
  scrollable = true;

  childView() {
    return null;
  }

  pureLayout() {
    return (
      <section className={classNames("abs trbl0 webkit-sassui-flex-fixed-bdauto exw-route-tabs pure-layout-view", {
        'ovs-y': this.scrollable
      })}>
        {this.childView()}
      </section>
    )
  }
}
