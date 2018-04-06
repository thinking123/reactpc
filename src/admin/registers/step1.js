import {Icon, Steps, Row, Col, Input, Select, Button} from 'antd';
import  AppBase, {$api, $route, ExwHeader} from 'components/scripts/index';


export default class extends React.Component {

  _onSubmit = e => {
    $route.push('/registers/step2');
  };

  render() {
    return (
      <div className="step1 illegal-records-add register-view">
        <ExwHeader />

        <div className="wp-8 trbl0 abs p20 bg-f webkit-sassui-transform-center-x bd">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.back}>
              <Icon type="left"/>
              <span>返回登陆</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">注册新用户</h2>
          <Steps current={0} style={{width: '50%'}}>
            <Steps.Step title="手机注册验证"/>
            <Steps.Step title="个人和公司信息"/>
          </Steps>


          <div className="blank-20"/>
          <div className="mb20_ mb__ form-view">
            <Row>
              <Col span={4}>
                <strong>登录手机号:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="登录手机号"/>
              </Col>
            </Row>

            <Row>
              <Col span={4}>
                <strong>手机验证码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder=""/>
              </Col>
            </Row>

            <Row>
              <Col span={4}>
                <strong>密码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="密码"/>
              </Col>
            </Row>

            <Row>
              <Col span={4}>
                <strong>再次输入密码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="再次输入密码"/>
              </Col>
            </Row>
          </div>
          <Button type="primary" onClick={this._onSubmit}>下一步</Button>
        </div>
      </div>
    );
  }
}

