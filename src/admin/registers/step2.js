import {Button, Input, Icon, Row, Col, Select, Divider, Upload, Radio, Steps, Cascader, Layout} from "antd";
import  AppBase, {$api, $route, ExwHeader} from 'components/scripts/index';
const Step = Steps.Step;
const RadioGroup = Radio.Group;

const {Option} = Select;
const {Dragger} = Upload;

export default class extends React.Component {

  _onSubmit = e => {
    console.log('submit!');
  };

  render() {
    return (
      <div className="step2 illegal-records-add register-view">
        <ExwHeader />

        <div className="wp-8 auto p20 bg-f bd">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left"/>
              <span>返回登陆</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">注册新用户</h2>
          <Steps current={1} style={{width: '50%'}}>
            <Steps.Step title="手机注册验证"/>
            <Steps.Step title="个人和公司信息"/>
          </Steps>


          <div className="blank-20"/>
          <div className="mb20_ mb__ form-view">
            <div className="blank-10"/>
            <h3 className="sub-title">
              <span className="b f14">请填写个人和公司信息，提交之后即可进入报馆系统平台。</span>
            </h3>

            <dl className="item">
              <dt className="b">个人信息</dt>
              <Row align={'middle'}>
                <Col span={3}>
                  <strong>姓名：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="姓名"/>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={3}>
                  <strong>职务：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="职务(选填)"/>
                </Col>
                <Col span={2}>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>身份证号：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="123456789012345678"/>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={3}>
                  <strong>微信号：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="微信号(选填)"/>
                </Col>
                <Col span={2}>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>邮箱：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="邮箱"/>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>邮寄地址：</strong>
                </Col>
                <Col span={7}>
                  <span>控件Waiting...</span>
                  {/*<Cascader options={options} placeholder="选择省市区"/>*/}
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong></strong>
                </Col>
                <Col span={21}>
                  <Input placeholder="邮寄地址(选填)"/>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <strong>个人身份证扫描件：</strong>
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
                  添加法人身份证
                  <Button size="large">添加法人身份证</Button>
                </p>
              </Dragger>
              <p>注意：请上传法人身份证的正反面扫描件，最多不超过5个文件，单个图片不超过1M，支持JPG和PDF格式。</p>
            </dl>

            <Divider />

            <dl className="item">
              <dt className="b">公司信息</dt>
              <Row>
                <Col span={3}>
                  <strong>公司名称：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="公司名称"/>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={3}>
                  <strong>传真：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="123-456-7890"/>
                </Col>
                <Col span={2}>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>身办公地址：</strong>
                </Col>
                <Col span={21}>
                  <Input placeholder="办公地址"/>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>法人姓名：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="法人姓名"/>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={3}>
                  <strong>法人手机：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="12345678901"/>
                </Col>
              </Row>
              <Row>
                <Col span={3}>
                  <strong>身份证号：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="123456789012345678"/>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={3}>
                  <strong>法人座机：</strong>
                </Col>
                <Col span={7}>
                  <Input placeholder="法人座机（选填）"/>
                </Col>
              </Row>

              <h3 className="sub-title">
                <span className="b f14">法人身份证扫描件：</span>
              </h3>
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
                  上传法人身份证扫描件
                  <Button size="large">添加文件</Button>
                </p>
              </Dragger>
              <p>注意：请上传法人身份证的正反面扫描件，最多不超过5个文件，单个图片不超过1M，支持JPG和PDF格式。</p>
            </dl>

            <h3 className="sub-title">
              <span className="b f14">公司营业执照扫描件：</span>
            </h3>
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
                上传公司营业执照扫描件
                <Button size="large">添加文件</Button>
              </p>
            </Dragger>
            <p>注意：请上传营业执照扫描件，最多不超过5个文件，单个图片不超过1M，支持JPG和PDF格式。</p>

            <h3 className="sub-title">
              <span className="b f14">公司其他资质扫描件：</span>
            </h3>
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
                上传公司其他资质扫描件
                <Button size="large">添加文件</Button>
              </p>
            </Dragger>
            <p>注意：请上传其他资质扫描件，最多不超过5个文件，单个图片不超过1M，支持JPG和PDF格式。</p>
          </div>
          <Button type="primary" onClick={this._onSubmit}>提交</Button>
        </div>
      </div>
    );
  }
}

