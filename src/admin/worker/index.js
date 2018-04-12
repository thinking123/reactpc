import AppBase, {
  $api, $store, $app, $config,$route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Table, Icon, Card, Input, Button, Tabs} from 'antd';

@mixin(['tabs-layout'])
export default class extends AntAbstractControllerIndex {

  static defaultProps = {
    className: 'p20'
  };

  layout = 'tabs';

  get route() {
    return {
      path: '/admin/worker/index/:state',
      component: require('admin/worker/index-status').default
    };
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


  componentDidMount() {
    //TODO:
  }


  topView() {
    return (
      <div className="lrfix_ top-view">
        <h3 className="f20 b left">
          我的报馆
        </h3>
        <div className="ml10_ ml__ right">
          <Button
            type="primary"
            icon="plus"
            onClick={$route.push.bind(null, "/admin/worker/add-step1")}>
            添加施工人员
          </Button>
          <Input.Search className="dib" style={{width: 220}} enterButton placeholder="do search"/>
        </div>
      </div>
    )
  }
}
