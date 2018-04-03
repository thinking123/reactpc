import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload } from "antd";
import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';

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

    records.push(
      this.renderRecord()
    );

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

  renderRecord(){
    return (
      <div key={this.state.records.length}>
        <p className="text">
          违规情况

        </p>
        {
          this.renderSubRow(
            "违规情况",
            <Input placeholder="填写违规情况" size="large" />
          )
        }
        {
          this.renderSubRow(
            "扣分",
            <Input className="score-input" size="large" />
          )
        }
        {
          this.renderSubRow(
            "附图",
            <Dragger
              multiple
              beforeUpload={()=> { return false; }}
              onChange={() => { console.log("选择附件") }}
            >
              <p className="ant-upload-hint">
                上传附件
                <Button size="large">添加文件</Button>
              </p>
            </Dragger>
          )
        }
        <Divider />
      </div>
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
          <h2 className="f20 mb20 b">新增银行汇款水单</h2>



          <Row>
            <Col span={3}>
              <strong>汇款公司名称:</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例："  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>汇款公司账号:</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例："  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>开户行:</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例："  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>汇款总额(￥):</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例：12,000.00"  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>押金(￥):</strong>
            </Col>
            <Col span={7}>
              <Input placeholder="例：12,000.00"  />
            </Col>
          </Row>

          <Row>
            <Col span={3}>
              <strong>服务费(￥):</strong>
            </Col>
            <Col span={7}>
              <lable>0</lable>
            </Col>
          </Row>

        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary">提交</Button>
        </div>
      </div>
    )
  };
};
