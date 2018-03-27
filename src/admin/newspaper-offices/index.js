import AppBase, {
  $api, $store, $app, $config,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Table, Icon, Card, Input, Button, Tabs} from 'antd';


@mixin(['tabs-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'tabs';

  get extra() {
    return (
      <div className="lfix_ ml10_ ml__ extra">
        <Input.Search className="dib" style={{width: 220}} enterButton placeholder="do search"/>
      </div>
    )
  }

  get route() {
    return {
      path: '/admin/newspaper-offices/index/:state',
      component: require('admin/newspaper-offices/index-status').default
    };
  }

  componentDidMount() {
  }

  get header() {
    return [
      {
        state: '1',
        component: <span>待审核(12)</span>
      },
      {
        state: '2',
        component: <span>已审核(213)</span>
      }
    ];
  }
}
