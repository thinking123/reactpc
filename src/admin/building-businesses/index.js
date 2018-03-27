import AppBase, {
  $api, $store, $app, $config,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Table, Icon, Card, Input, Button, Tabs} from 'antd';


@mixin(['tabs-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'tabs';

  get extra() {
    const {params} = AppBase.$.memory;
    const {state} = params;
    return (
      <div className="lfix_ ml10_ ml__ extra">
        {state == '1' && <Button type="primary" icon="download">导出搭建商</Button>}
        <Input.Search className="dib" style={{width: 220}} enterButton placeholder="do search"/>
      </div>
    )
  }

  get route() {
    return {
      path: '/admin/building-businesses/index/:state',
      component: require('admin/building-businesses/index-status').default
    };
  }

  componentDidMount() {
    //TODO:
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
