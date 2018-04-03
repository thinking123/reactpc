import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload, Radio} from "antd";
import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';

const RadioGroup = Radio.Group;

let { Option } = Select;
let { Dragger } = Upload;

export default class extends Component {
  constructor(){
    super();

    this.state = {
      records: []
    };

    this.addNewRecord(false);
  };

  addNewRecord(shouldSetState = true){
    var records = this.state.records;

    // records.push(
    //   this.renderRecord()
    // );

    if(shouldSetState){
      this.setState({ records });
    }
  };

  filterOption(input, option){
    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  renderSubRow(text, detail, double){
    return (
      <Row>
        <Col className="title" span={double ? 4 : 2}>{text}</Col>
        <Col span={double ? 16 : 20}>{detail}</Col>
      </Row>
    );
  };

  renderSubCol(text){
    return (
      <Col span="12">{
        this.renderSubRow(
          text,
          <Select
            showSearch
            placeholder={"选择" + text}
            optionFilterProp="children"
            filterOption={this.filterOption}
            size="large"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>,
          true
        )
      }</Col>
    );
  };


  render(){
    return (
      <div className="illegal-records-add">

        <div className="content">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left" />
              <span>返回账号设置</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">修改密码</h2>

          <Row>
            <Col span={3}>
              <strong>新密码:</strong>
            </Col>
            <Col span={7}>
              <Input placeholder=""  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>再次输入新密码:</strong>
            </Col>
            <Col span={7}>
              <Input placeholder=""  />
            </Col>
          </Row>

        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary">保存</Button>
        </div>
      </div>
    )
  };

  onChangeRadio(){

  }
};
