import React, {Component} from "react";
import {Button, Divider,Input, Icon, Row, Col, Alert, Select, Upload, Radio, Tabs, Tab, Tag, Table} from "antd";
import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';

import Details from "components/mixins/details";
let { Title, Merger, Info, Image, Tools} = Details;

const RadioGroup = Radio.Group;

let {Option} = Select;
let {Dragger} = Upload;

@mixin(['pure-layout', 'match'])
export default class extends AntAbstractControllerIndex {

  layout = 'pure';

  state = {
    tabId: '1',
    endTime: '2018年3月26日18:00',
    data: [
      {
        id: '1',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian: '扫描件',
        yicunzhaopian: '一寸照片',
      },
      {
        id: '2',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian: '扫描件',
        yicunzhaopian: '一寸照片',
      },
      {
        id: '3',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian: '扫描件',
        yicunzhaopian: '一寸照片',
      },
      {
        id: '4',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian: '扫描件',
        yicunzhaopian: '一寸照片',
      }

    ],
    columns: [
      {
        title: '姓名',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '身份证号',
        key: 'id_number',
        dataIndex: 'id_number'
      },
      {
        title: '身份证扫描件',
        key: 'id_scan_image',
        dataIndex: 'id_scan_image'
      },
      {
        title: '一寸照片',
        key: 'werwweerwdasder',
        dataIndex: 'werwweerwdasder'
      },
      {
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
              <a href={`#/admin/worker/show/${record.id}`}>拒绝</a>
              <Divider type="vertical" />
              <a href={`#/admin/worker/show/${record.id}`}>修改</a>
              <Divider type="vertical" />
              <a href={`#/admin/worker/show/${record.id}`}>删除</a>
          </span>
        ),
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
    const {endTime, columns, data} = this.state;

    const {constructorDetail} = AppBase.$.memory || {};
    let source = constructorDetail.constructor || [] ;

    return (
      <Details className="illegal-records-details holy-grain">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left"/>
            <span>返回列表</span>
          </a>
        </h3>
        <header>
          <span className="b f18">施工人员详情</span>
        </header>

        <Info text="提交时间">2017年12月20日</Info>

        <Alert className="my10" message="有部分施工人员申请被拒绝，请修改并重新提交" type="warning"/>
        <Tabs activeKey={tabId} onChange={this._onChange}>
          <Tabs.TabPane tab="施工人员信息" key="info">
            <Table bordered rowKey={'id'} columns={columns} dataSource={source} size="middle"/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="保险单" key="list">
            <Dragger
              multiple
              beforeUpload={() => {
                return false;
              }}
              onChange={() => {
                console.log("选择附件")
              }}
            >
              <p className="ant-upload-hint">
                添加保险单
                <Button size="large">添加保险单</Button>
              </p>
            </Dragger>
            <p>注意：请上传施工人员保险单，单个图片不超过1M，仅限JPG格式。</p>

          </Tabs.TabPane>
        </Tabs>
      </Details>
    )
  }

  componentDidMount() {
    this.update('info');

    $api.constructor_detail_list({user_id: 123123, constructor_list: 1}).then(resp=>{
      AppBase.$.memory = {
        constructorDetail: resp.data || {}
      };
    })
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

