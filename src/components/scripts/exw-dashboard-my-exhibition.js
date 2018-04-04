import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Table, Button, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';

export default class extends Component {
  state = {
    endTime:'2018年3月26日18:00',
    data: [
      {
        id: '1',
        position: '展位',
        shangjia: '参展商',
        status: '拒绝'
      },
      {
        id: '2',
        position: '展位',
        shangjia: '参展商',
        status: '拒绝'
      },
      {
        id: '3',
        position: '展位',
        shangjia: '参展商',
        status: '审核中'
      }
    ],
    columns: [
      {
        title: '展位',
        key: 'position',
        dataIndex: 'position'
      },
      {
        title: '参展商',
        key: 'shangjia',
        dataIndex: 'shangjia'
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status'
      },
      {
        title: '',
        key: 'action',
        render: () => {
          return (
            <div className="actions">
              <Button size="small" onClick={$route.push.bind(null, '/admin/my-exhibition/index/1')}>查看</Button>
            </div>
          )
        }
      }
    ]
  };

  render() {
    const {endTime,columns, data} = this.state;
    return (
      <div className="p20 my-exhibition-view bg-f">
        <header>
          <span className="b f18">我的报馆</span>
        </header>
        <header className="sub-title">
          <span className="b f14">报馆截止时间为{endTime}</span>
        </header>
        <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
        <Button type="primary" icon="add" onClick={$route.push.bind(null, '/admin/my-exhibition/add')}>新增报馆</Button>
      </div>
    )
  }
}
