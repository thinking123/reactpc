import AppBase, {
  $api, $store, $app, $config,$route,
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

        <Button
          type="primary"
          icon="plus"
          onClick={$route.push.bind(null, "/admin/my-exhibition/add-step1")}>
          新增报馆
        </Button>
        <Input.Search className="dib" style={{width: 220}} enterButton placeholder="do search"/>
      </div>
    )
  }

  get route() {
    return {
      path: '/admin/my-exhibition/index/:state',
      component: require('admin/my-exhibition/index-status').default
    };
  }

  componentDidMount() {
    //TODO:
  }

  get header() {
    return [
      {
        state: '1',
        component: <span>拒绝(12)</span>
      },
      {
        state: '2',
        component: <span>未提交(213)</span>
      },
      {
        state: '3',
          component: <span>待审核(12)</span>
      },
    {
      state: '4',
        component: <span>审核中(213)</span>
    },
      {
        state: '5',
        component: <span>通过(213)</span>
      }
    ];
  }
}
