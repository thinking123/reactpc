import React, {Component} from "react";
import {Button, Input, Icon, Row, Col, Select, Divider, Upload, Radio, Steps, Cascader, InputNumber} from "antd";
import AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {$app} from "../../components/scripts";

const Step = Steps.Step;
const RadioGroup = Radio.Group;

let {Option} = Select;
let {Dragger} = Upload;

const steps = [{
  title: '填写展位和搭建商信息'
}, {
  title: '填写费用清单'
}];

export default class extends Component {
  constructor() {
    super();

    this.state = {
      records: [],
      current: 0,
    };

    this.addNewRecord(false);
  };

  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }

  addNewRecord(shouldSetState = true) {
    var records = this.state.records;

    // records.push(
    //   this.renderRecord()
    // );

    if (shouldSetState) {
      this.setState({records});
    }
  };

  filterOption(input, option) {
    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  renderSubRow(text, detail, double) {
    return (
      <Row>
        <Col className="title" span={double ? 4 : 2}>{text}</Col>
        <Col span={double ? 16 : 20}>{detail}</Col>
      </Row>
    );
  };

  renderSubCol(text) {
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


  render() {
    const {current} = this.state;

    return (
      <div className="illegal-records-add">

        <div className="content">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left"/>
              <span>返回列表</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">新增报馆</h2>


          <div>
            <Steps current={current} style={{width: '50%'}}>
              {steps.map(item => <Step key={item.title} title={item.title}/>)}
            </Steps>

            <div>
              {
                this.state.current === 0
                && <div>
                  <h3>
                    <span className="b f14">展位信息</span>
                  </h3>

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
                        <Input placeholder="例："/>
                      </Col>
                      <Col span={2}>
                      </Col>
                      <Col span={3}>
                        <strong>负责人手机号：</strong>
                      </Col>
                      <Col span={7}>
                        <Input placeholder="例：13000000000"/>
                      </Col>
                      <Col span={2}>
                      </Col>
                    </Row>

                  </dl>

                  <Divider/>

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
                    beforeUpload={() => {
                      return false;
                    }}
                    onChange={() => {
                      console.log("选择附件")
                    }}
                  >
                    <p className="ant-upload-hint">
                      上传展位图纸
                      <Button size="large">添加文件</Button>
                    </p>
                  </Dragger>
                  <p>注意：请上传效果图、施工图、材质说明图、电路图、细部结构图等所有相关图纸，单个文件不超过1M，仅限JPG格式。</p>

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
                      <Input placeholder="例："/>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={3}>
                      <strong>办公电话：</strong>
                    </Col>
                    <Col span={7}>
                      <Input placeholder="设计院办公电话"/>
                    </Col>
                    <Col span={2}>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={3}>
                      <strong>出图工程师：</strong>
                    </Col>
                    <Col span={7}>
                      <Input placeholder="出图工程师姓名"/>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={3}>
                      <strong>手机号：</strong>
                    </Col>
                    <Col span={7}>
                      <Input placeholder="出图工程师手机号"/>
                    </Col>
                    <Col span={2}>
                    </Col>
                  </Row>

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
                      上传出图工程师资质证书
                      <Button size="large">添加文件</Button>
                    </p>
                  </Dragger>
                  <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

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
                      上传电工证
                      <Button size="large">添加文件</Button>
                    </p>
                  </Dragger>
                  <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

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
                      上传特装站台搭建委托书
                      <Button size="large">添加文件</Button>
                    </p>
                  </Dragger>
                  <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

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
                      上传押金扣除标准
                      <Button size="large">添加文件</Button>
                    </p>
                  </Dragger>
                  <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，仅限JPG格式。</p>

                </div>

              }
              {
                this.state.current === 1 &&
                <dl className="item">
                  <dd>
                    <ul className="lfix_">

                      <li style={{width: '100%'}}>
                        <div className="wp-10">
                          <div className="table-like">
                            <Row>
                              <Col span={8}>
                                <strong>展期用电</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">单价</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={8}>
                                <Select defaultValue="1" style={{width: 200}}>
                                  <Option value="1">用电</Option>
                                </Select>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={8}>
                                <Select defaultValue="1" style={{width: 200}}>
                                  <Option value="1">用电</Option>
                                </Select>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">123</strong>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">123</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                            <Button className="text-button" icon="plus">添加</Button>
                          </div>
                          <div className="table-like">
                            <Row>
                              <Col span={8}>
                                <strong>临时搭建用电</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">单价</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={8}>
                                <Select defaultValue="1" style={{width: 200}}>
                                  <Option value="1">用电</Option>
                                </Select>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                            <Button className="text-button" icon="plus">添加</Button>
                          </div>








                          <div className="table-like">
                            <Row>
                              <Col span={8}>
                                <strong>用水、气服务</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">单价</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={8}>
                                <Select defaultValue="1" style={{width: 200}}>
                                  <Option value="1">用电</Option>
                                </Select>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                            <Button className="text-button" icon="plus">添加</Button>
                          </div>




                          <div className="table-like">
                            <Row>
                              <Col span={8}>
                                <strong>有限网络</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">单价</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={8}>
                                <Select defaultValue="1" style={{width: 200}}>
                                  <Option value="1">用电</Option>
                                </Select>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                            <Button className="text-button" icon="plus">添加</Button>
                          </div>


                          <div className="table-like">
                            <Row>
                              <Col span={12}>
                                <strong>施工证</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={12}>
                                <em className="c-9">辆/限3小时，超过时间按照200元/小时收延时费。<br />（车证押金为600元/张，未退回将扣除全部车证押金）</em>
                              </Col>

                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>



                          <div className="table-like">
                            <Row>
                              <Col span={12}>
                                <strong>车证</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={12}>
                                <em className="c-9">辆/限 2 小时，每张车证限定 1 辆货车牌照号</em>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>

                          <div className="table-like">
                            <Row>
                              <Col span={12}>
                                <strong>安全员袖章</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">数量</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={12}>
                                <em className="c-9">100㎡以下（含），1名安全员<br />
                                  安全员展会期间必须在展位，负责展位安全，监督施工<br />人员安全作业，配合主场管理。</em>
                              </Col>
                              <Col span={4}>
                                <InputNumber min={1} defaultValue={1}/>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>

                          <div className="table-like">
                            <Row>
                              <Col span={16}>
                                <strong>施工管理费</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <em className="c-9">按展位实际面积计算</em>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>

                          <div className="table-like">
                            <Row>
                              <Col span={16}>
                                <strong>施工押金</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <em className="c-9">按展位实际面积计算</em>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>

                          <div className="table-like">
                            <Row>
                              <Col span={16}>
                                <strong>滞纳金</strong>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">金额</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <em className="c-9">当前未超过截止时间，不需要缴纳</em>
                              </Col>
                              <Col span={4}>
                                <strong className="c-9">121</strong>
                              </Col>
                              <Col span={4}>
                                <Icon type="close"/>
                              </Col>
                            </Row>
                          </div>

                        </div>
                      </li>
                    </ul>
                  </dd>
                </dl>
              }
            </div>
            <div className="steps-action">
              {
                this.state.current < steps.length - 1
                && <div>
                  <Button size="large">取消</Button>
                  <Button size="large" type="primary" onClick={() => this.next()}>保存，下一步</Button>
                </div>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={this._onSubmit}>提交</Button>
              }

            </div>
          </div>


        </div>
        {/*<div className="footer">*/}
        {/*<Button size="large">取消</Button>*/}
        {/*<Button size="large" type="primary">保存，下一步</Button>*/}
        {/*</div>*/}
      </div>
    )
  };

  onChangeRadio() {

  }
};
