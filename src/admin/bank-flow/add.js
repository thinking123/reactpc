import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload } from "antd";

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
          <Row>
            {this.renderSubCol("展馆")}
            {this.renderSubCol("展位")}
          </Row>
          <Row>
            {this.renderSubCol("参展商")}
            {this.renderSubCol("搭建商")}
          </Row>
          <Divider />
          {this.state.records}
          <div className="add-record" onClick={() => { this.addNewRecord(); }}>
            <Icon type="plus" />
            添加记录
          </div>
        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary">保存</Button>
        </div>
      </div>
    )
  };
};
