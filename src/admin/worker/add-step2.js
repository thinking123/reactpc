import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload, Radio, Steps} from "antd";
import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';

const RadioGroup = Radio.Group;
const Step = Steps.Step;

let { Option } = Select;
let { Dragger } = Upload;

export default class extends Component {
  constructor(){
    super();

    this.state = {
      records: [],
      current: 0,
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
    const {current} = this.state;

    return (
      <div className="illegal-records-add">

        <div className="content">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left" />
              <span>返回列表</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">添加施工人员</h2>

          <Steps current={1} style={{width: '50%'}}>
            <Steps.Step title="上传施工人员信息"/>
            <Steps.Step title="上传保险单"/>
          </Steps>

          <p className="text">
            施工人数(0)
          </p>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传施工人员保险单
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传施工人员保险单，单个图片不超过1M，仅限JPG格式。</p>

        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary">保存，下一步</Button>
        </div>
      </div>
    )
  };

  onChangeRadio(){

  }
};
