import  AppBase, {
  $api, $route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Menu, Icon, Table, Button, Input,  Divider} from 'antd';

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
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
                  {/*<a href={`#/admin/bank-flow/show/${record.key}`}>开发票</a>*/}
            <a href="javascript:;" onClick={this._openTicket}>开发票</a>

                  <Divider type="vertical" />
                  <a href={`#/admin/bank-flow/show/${record.key}`}>修改</a>
                </span>

        ),
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

  _openTicket(){
    $route.push("/admin/bank-flow/show/" );
    $modal.show('builders-refuse');
  }
}

