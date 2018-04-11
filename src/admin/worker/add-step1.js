import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload, Radio, Steps, Table as AntTable} from "antd";
import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import Table from "components/mixins/table";
import arrowDownImg from 'images/arrow.png';
import arrowUpImg from 'images/arrow2.png';

const RadioGroup = Radio.Group;
const Step = Steps.Step;

let { Option } = Select;
let { Dragger } = Upload;
let { ColumnData } = Table;

export default class extends Component {
  constructor(){
    super();

    this.state = {
      records: [],
      current: 0,
      showDownArrow:true,
      dataSource: [],
      dataSource2: []
    };

    for(var i = 0; i < 8;i++){
      this.state.dataSource.push({
        key: i,
        username: `姓名${i}`,
        cardId: `身份证号${i}`
      });
      this.state.dataSource2.push({
        key: i,
        username: `姓名${i}`,
        cardId: `身份证号${i}`
      });
    }

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

  columns = [
    new ColumnData("姓名", "username"),
    new ColumnData("身份证号", "cardId")
  ];

  columns2 = [
    new ColumnData("姓名", "username"),
    new ColumnData("身份证号", "cardId"),
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => this._modifyWorker()}>修改</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => this._deleteWorker()}>删除</a>
        </span>

      ),
    }
  ];

  render(){
    const {current, showDownArrow} = this.state;
    let { columns, columns2, state: {dataSource, dataSource2} } = this;

    return (
      <div className="my-worker-add">

        <div className="content">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left" />
              <span>返回列表</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">添加施工人员</h2>

          <Steps current={0} style={{width: '50%'}}>
            <Steps.Step title="上传施工人员信息"/>
            <Steps.Step title="上传保险单"/>
          </Steps>

          {showDownArrow && <p className="link_button" onClick={() =>  this.setState({showDownArrow:false})}>
            显示历史施工人员
            <img src={arrowDownImg} />
          </p>}
          {!showDownArrow && <div>
            <p className="link_button" onClick={() =>  this.setState({showDownArrow:true})}>
                隐藏历史施工人员
                <img src={arrowUpImg} />
            </p>

            <p>
              <Input size="large" />
            </p>
            <AntTable
              columns={columns}
              bordered={true}
              dataSource={dataSource}
              pagination={false}
              rowSelection={{
                onChange: (selectedRowKeys, selectedRows) => {
                  this.onSelectTargets(selectedRowKeys, selectedRows);
                }
              }}
            />
            </div>}

          <p className="text">
            施工人数(0)
          </p>

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传施工人员表格
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>请点击<a href='/#' target="_blank">
            这里
          </a>下载施工人员表格模板填写。</p>

          <AntTable
            columns={columns2}
            bordered={true}
            dataSource={dataSource2}
            pagination={false}
            rowSelection={{
              onChange: (selectedRowKeys, selectedRows) => {
                this.onSelectTargets2(selectedRowKeys, selectedRows);
              }
            }}
          />

        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary" onClick={this._onSubmit}>保存，下一步</Button>
        </div>
      </div>
    )
  };

  onChangeRadio(){

  }

  _onSubmit = e => {
    $route.push('/admin/worker/add-step2');
  };

  onSelectTargets(selectedRowKeys, selectedRows){
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  };

  onSelectTargets2(selectedRowKeys, selectedRows){
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  };

  _modifyWorker(){
      alert('modify');
  }

  _deleteWorker(){
    alert('delete');
  }

};
