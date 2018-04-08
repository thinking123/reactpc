import React, { Component } from "react";
import { Button, Input, Icon, Row, Col, Select, Divider, Upload, Checkbox } from "antd";
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
      records: [],
      showMore:false
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

  onChange(e){
    const showMore = e.target.checked;
    this.setState({showMore});
  }

  render(){
    const {showMore} = this.state;
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

          <dl className="item">
            <dd>
              <ul className="lfix_">
                <li style={{width: '100%'}}>
                  <strong>支付的展位：</strong>
                  <div className="table-like bordered wp-10">
                    <Row className="table-like__header">
                      <Col span={6}>展位号</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>费用合计</Col>
                      <Col span={4}>押金</Col>
                      <Col span={4}>服务费</Col>
                    </Row>
                    <Row>
                      <Col span={6}>A101</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>30000</Col>
                      <Col span={4}>10000</Col>
                      <Col span={4}>20000</Col>
                    </Row>
                    <Row>
                      <Col span={6}>A103</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>30000</Col>
                      <Col span={4}>5000</Col>
                      <Col span={4}>25000</Col>
                    </Row>
                    <Row className="table-like__footer">
                      <Col span={6}>合计</Col>
                      <Col span={4} offset={6}>60000</Col>
                      <Col span={4}>15000</Col>
                      <Col span={4}>45000</Col>
                    </Row>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>

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

          <Dragger
            multiple
            beforeUpload={()=> { return false; }}
            onChange={() => { console.log("选择附件") }}
          >
            <p className="ant-upload-hint">
              上传银行汇款水单
              <Button size="large">添加文件</Button>
            </p>
          </Dragger>
          <p>注意：请上传银行汇款水单，单个文件不超过1M，仅限JPG格式。</p>

          <Checkbox onChange={(e) => this.onChange(e)}>填写开票信息 <lable style={{color: 'red'}}>服务费为0，不可开发票</lable></Checkbox>

          {showMore && <div>
            <Row>
              {this.renderSubCol("发票类型")}
            </Row>
            <Row>
              <Col span={3}>
                <strong>汇款公司名称:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="公司名称"  />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={3}>
                <strong>金额(服务费):</strong>
              </Col>
              <Col span={7}>
                <label>10,000</label>
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <strong>汇款公司账号:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例："  />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={3}>
                <strong>开户行:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例："  />
              </Col>
            </Row>
            <Dragger
              multiple
              beforeUpload={()=> { return false; }}
              onChange={() => { console.log("选择附件") }}
            >
              <p className="ant-upload-hint">
                上传一般纳税人证明
                <Button size="large">添加文件</Button>
              </p>
            </Dragger>
            <p>注意：请上传一般纳税人证明，单个文件不超过1M，仅限JPG格式。</p>
            <Row>
              <Col span={3}>
                <strong>纳税人识别号:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例："  />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={3}>
                <strong>电话:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="例：1300000000"  />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <strong>地址:</strong>
              </Col>
              <Col span={19}>
                <Input placeholder="地址："  />
              </Col>
            </Row>

            <h2 className="b">发票收件人信息</h2>
            <Row>
              <Col span={3}>
                <strong>收件人姓名:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="收件人姓名"  />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={3}>
                <strong>收件人手机号:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="收件人手机号"  />
              </Col>
            </Row>
            <Row>
              <Col span={3}>
                <strong>收件人地址:</strong>
              </Col>
              <Col span={19}>
                <Input placeholder="收件人地址"  />
              </Col>
            </Row>

            </div>}
        </div>
        <div className="footer">
          <Button size="large">取消</Button>
          <Button size="large" type="primary">提交</Button>
        </div>
      </div>
    )
  };

};
