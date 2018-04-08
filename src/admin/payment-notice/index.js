import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Table, Button, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';

export default class extends Component {
  state = {
    data: [
      {
        number: '1232123',
        location: '展位号',
        canzhuanshang: '参展商',
        status: '更新',
        time: '昨天'
      },
      {
        number: '1232123',
        location: '展位号',
        canzhuanshang: '参展商',
        status: '更新',
        time: '昨天'
      },
      {
        number: '1232123',
          location: '展位号',
        canzhuanshang: '参展商',
        status: '更新',
        time: '昨天'
      }
    ],
    columns: [
      {
        title: '编号',
        key: 'number',
        dataIndex: 'number'
      },
      {
        title: '展位',
        key: 'location',
        dataIndex: 'location'
      },
      {
        title: '参展商',
        key: 'canzhuanshang',
        dataIndex: 'canzhuanshang'
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status'
      },
      {
        title: '通知时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '付款通知单',
        key: 'action',
        render: (text, record) => (
          <span>
                  <a href={`#/admin/payment-notice/show/${record.key}`}>再次下载</a>
                </span>
        ),
      }
    ]
  };

  render() {
    const {columns, data} = this.state;
    return (
      <div className="p20 notification-view">
        <header className="lrfix_" style={{lineHeight: '32px'}}>
          <h1 className="b f20">付款通知单</h1>
          <Input.Search className="right wp-3" placeholder="Search" enterButton/>
        </header>
        <div className="blank-20"/>
        <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
      </div>
    )
  }
}
