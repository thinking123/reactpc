import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Alert, Table, Button, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';

export default class extends Component {
  state = {
    endTime: '2018年3月26日18:00',
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
              <a href={'javascript:;'} onClick={$route.push.bind(null, '/admin/my-exhibition/index/1')}>查看</a>
            </div>
          )
        }
      }
    ]
  };

  render() {
    const {endTime, columns, data} = this.state;
    return (
      <div className="p20 my-exhibition-view bg-f">
        <header>
          <span className="b f18">我的报馆</span>
        </header>
        <Alert className="my10" message={`报馆截止时间为${endTime}`} type="warning"/>
        <Table
          className='table-component p0'
          rowKey={'id'} columns={columns}
          pagination={false}
          dataSource={data} size="middle"/>
        <footer className={'mt10'}>
          <Button type="primary" icon="plus" onClick={$route.push.bind(null, '/admin/my-exhibition/add-step1')}>新增报馆</Button>
        </footer>
      </div>
    )
  }
}
