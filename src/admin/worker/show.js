import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Table,Button, Tag, Icon,Tabs,Tab} from 'antd';
import ReactSmartPhoto from 'react-smart-photo';

@mixin(['pure-layout', 'match'])
export default class extends AntAbstractControllerIndex {

  layout = 'pure';

  state = {
    tabId: '1',
    endTime:'2018年3月26日18:00',
    data: [
      {
        id: '1',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '2',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '3',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '4',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      }

    ],
    columns: [
      {
        title: '姓名',
        key: 'username',
        dataIndex: 'username'
      },
      {
        title: '身份证号',
        key: 'idcardnumber',
        dataIndex: 'idcardnumber'
      },
      {
        title: '身份证扫描件',
        key: 'saomiaojian',
        dataIndex: 'saomiaojian'
      },
      {
        title: '一寸照片',
        key: 'yicunzhaopian',
        dataIndex: 'yicunzhaopian'
      },
      {
        title: '',
        key: 'action',
        render: () => {
          return (
            <div className="actions">
              <Button size="small" onClick={$route.push.bind(null, '/')}>查看</Button>
            </div>
          )
        }
      }
    ]
  };

  footerView() {
    const {tabId} = AppBase.$.memory;
    const statusList = ['info', 'list'];

    return (
      <div className="lrfix_">
        <label className="left" style={{lineHeight: '34px'}}>
          <span>搭建商类别：</span>
          <select>
            <option value="1">搭建商1</option>
            <option value="2">搭建商2</option>
          </select>
        </label>
        <div className="right">
          <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
            <Icon type="left"/>
            <span>返回</span>
          </Tag>
          <Tag color="#F34D45" onClick={this._onClick.bind(this, 'refuse')}>拒绝</Tag>
          <Tag color="#46A96A" onClick={this._onClick.bind(this, 'pass')}>通过</Tag>
        </div>
      </div>
    );
  }

  childView() {
    const {tabId} = AppBase.$.memory;
    const {endTime,columns, data} = this.state;

    return (
      <div className="p20 my-exhibition-view bg-f">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left" />
            <span>返回列表</span>
          </a>
        </h3>
        <header>
          <span className="b f18">施工人员详情</span>
        </header>
        <header className="sub-title">
          <span className="b f14">有部分施工人员申请被拒绝，请修改并重新提交</span>
        </header>

        <Tabs activeKey={tabId} onChange={this._onChange}>
          <Tabs.TabPane tab="展位和搭建商信息" key="info">
            <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="费用清单" key="list">Content of Tab Pane 2</Tabs.TabPane>
        </Tabs>
      </div>
    )
  }

  componentDidMount() {
    this.update('info');
  }

  update(inTabId) {
    AppBase.$.memory = {tabId: inTabId,};
    AppBase.$.memory = {footer: this.footerView()};
  }


  _onClick = inStatus => {
    switch (inStatus) {
      case 'back':
        $route.back();
        break;
      case 'prev':
        this.update('info');
        break;
      case 'next':
        this.update('list');
        break;
      default:
        AppBase.notify(`You Click status: => ${inStatus}`);
    }
  };

  _onChange = inTabId => {
    this.update(inTabId);
  };

  render() {
    return this.pureLayout();
  }
}

