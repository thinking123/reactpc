import  AppBase, {
  $api, $route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Menu, Icon, Table, Button, Input} from 'antd';

@mixin(['active-state', 'match', 'pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  get fields() {
    return [
      {
        key: 'id',
        dataIndex: 'id',
        title: '汇款公司'
      }, {
        key: 'name',
        dataIndex: 'name',
        title: '汇款公司账号'
      }, {
        key: 'data',
        dataIndex: 'data',
        title: '汇款总额'
      }, {
        key: 'yajin',
        dataIndex: 'yajin',
        title: '押金'
      }, {
        key: 'kaipiaojine',
        dataIndex: 'kaipiaojine',
        title: '开票金额'
      },
        {
          title: '操作',
            key: 'action',
          render: () => {
          return (
            <div className="actions">
              <Button size="small" onClick={$route.push.bind(null, '/admin/notifications/show')}>查看</Button>
            </div>
          )
        }
        }
    ]
  }

  componentDidMount() {
    super.componentDidMount();
    this.syncActiveState();
    this.syncParams();
    this.watchParams();
  }

  load() {
    //TODO: will be removed
    const data = [
      {
        id: 1,
        name: '公司名',
        data: 12345678,
        yajin:1000,
        kaipiaojine:1000
      },
      {
        id: 2,
        name: '公司名2',
        data: 123333,
        yajin:2000,
        kaipiaojine:2000
      }
    ];

    setTimeout(() => {
      this.setState({data, total: 2});
    }, 100);
  }

  componentWillUnmount() {
    this.unWatchParams();
  }

  onRowClick = inRecord => {
    $route.push(`/admin/bank-flow/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }
}

