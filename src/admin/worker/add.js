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
              <span>返回列表</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">新增报馆</h2>

          <Row>
            {this.renderSubCol("展馆")}
            {this.renderSubCol("展位")}
          </Row>
          <Row>
            {this.renderSubCol("参展商")}
            {this.renderSubCol("搭建商")}
          </Row>

          <dl className="item">
            <dt className="b">搭建商信息</dt>
            <Row>
              <Col span={3}>
                <strong>现场负责人：</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例："  />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={3}>
                <strong>负责人手机号：</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例：13000000000"  />
              </Col>
              <Col span={2}>
              </Col>
            </Row>

          </dl>

          <Divider />

          <p className="text">
            文件
          </p>
          <Row>
            <Col span={3}>
              展台结构类型:</Col>
            <Col span={21}>
              <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
                <Radio value={1}>室内单层</Radio>
                <Radio value={2}>室内双层</Radio>
                <Radio value={3}>室外钢木结构</Radio>
                <Radio value={4}>室外简易结构(如: 纯桁架结构等)</Radio>
              </RadioGroup>
            </Col>
          </Row>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传展位图纸
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传效果图、施工图、材质说明图、电路图、细部结构图等所有相关图纸，单个文件不超过1M，仅限JPG格式。</p>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传展位细部结构图及审计报告
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG，DWG，RAR格式。</p>

          <Row>
            <Col span={3}>
              <strong>设计院全称：</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例："  />
            </Col>
            <Col span={2}>
            </Col>
            <Col span={3}>
              <strong>办公电话：</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="设计院办公电话"  />
            </Col>
            <Col span={2}>
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>出图工程师：</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="出图工程师姓名"  />
            </Col>
            <Col span={2}>
            </Col>
            <Col span={3}>
              <strong>手机号：</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="出图工程师手机号"  />
            </Col>
            <Col span={2}>
            </Col>
          </Row>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传出图工程师资质证书
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>


          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传电工证
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传特装站台搭建委托书
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传押金扣除标准
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

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
