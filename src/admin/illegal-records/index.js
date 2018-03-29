import React, {Component} from 'react';
import {Row, Col, Menu, Card, Input, Table, Button, Icon} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';


export default class extends Component {

  state = {
    data: [
      {
        id: '1',
        zw:'zw',
        czs: '这里是标题标题标题标题标题',
        time: '2017年12月20日',
        kf: 'xljflsdjf'
      }
    ],
    columns: [
      {
        title: '展位',
        key: 'zw',
        dataIndex: 'zw'
      },
      {
        title: '参展商',
        key: 'czs',
        dataIndex: 'czs'
      },
      {
        title: '违规扣分',
        key: 'kf',
        dataIndex: 'kf'
      },
      {
        title: '处理时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '操作',
        key: 'action',
        render: () => {
          return (
            <div className="actions">
              <Button size="small" onClick={$route.push.bind(null, '/admin/illegal-records/show')}>查看</Button>
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
          <h1 className="b f20">违规记录</h1>
          <Input.Search className="right wp-3" placeholder="Search" enterButton/>
        </header>
        <div className="blank-20"/>

        <Row gutter={20} className='tc c-gray'>
          <Col span="6">
            <div className="pt20 pb10 shadow-1 bd">
              <h3 className="c-gray">违规扣分总计</h3>
              <p className="b f48">90</p>
            </div>
          </Col>
          <Col span="6">
            <div className="pt20 pb10 shadow-1 bd">
              <h3 className="c-gray">违规条数</h3>
              <p className="b f48">3</p>
            </div>
          </Col>
        </Row>


        <div className="blank-20"/>
        <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
      </div>
    )
  }
}
