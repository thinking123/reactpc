import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Table, Button, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';

export default class extends Component {
  state = {
    data: [
      {
        id: '1',
        content: '这里是标题标题标题标题标题',
        time: '2017年12月20日'
      }
    ],
    columns: [
      {
        title: '内容',
        key: 'content',
        dataIndex: 'content'
      },
      {
        title: '通知时间',
        key: 'time',
        dataIndex: 'time'
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
  };

  render() {
    const {columns, data} = this.state;
    return (
      <div className="p20 notification-view">
        <header className="lrfix_" style={{lineHeight: '32px'}}>
          <h1 className="b f20">通知</h1>
          <Input.Search className="right wp-3" placeholder="Search" enterButton/>
        </header>
        <div className="blank-20"/>
        <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
      </div>
    )
  }

  componentDidMount() {
    $api.notice_index().then(resp=>{
      AppBase.$.memory = {
        noticeList: resp.data
      }
    })
  }
}
