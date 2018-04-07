import {Icon, Steps, Row, Col, Form, Input, Select, Button} from 'antd';
import  AppBase, {$api, $app, $route, ExwHeader} from 'components/scripts/index';
import ReactCountdown from 'react-countdown';


//TODO: optimize component
const COUNT_TIME = 10;

export default class extends React.Component {

  _onSubmit = e => {
    $route.push('/registers/step2');
  };

  state = {
    time: 0
  };

  _onChange = inTime => {
    this.setState({time: inTime});
  };

  componentDidMount() {
    const {ct} = this.refs;
    this._ct = ct;
  }

  send = () => {
    AppBase.msg('已经发送', 'success');
    this._ct.start();
  };

  render() {
    const {time} = this.state;
    return (
      <div className="step1 illegal-records-add register-view">
        <ExwHeader />

        <div className="wp-8 trbl0 abs p20 bg-f webkit-sassui-transform-center-x bd">
          <h3 className="mb10">
            <a href="javascript:;" onClick={$route.push.bind(null, '/')}>
              <Icon type="left"/>
              <span>返回登陆</span>
            </a>
          </h3>
          <h2 className="f20 mb20 b">注册新用户</h2>
          <Steps current={0} style={{width: '50%'}}>
            <Steps.Step title="手机注册验证"/>
            <Steps.Step title="个人和公司信息"/>
          </Steps>

          <div className="blank-40"/>
          <div className="mb20_ mb__ form-view">
            <Row align="middle" type="flex">
              <Col span={4}>
                <strong className="f14 c-gray">登录手机号:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="登录手机号"/>
              </Col>
              <Col span={3}>
                <Button className='ml10' type="primary" disabled={!!time} onClick={this.send}>
                  <ReactCountdown ref="ct" time={COUNT_TIME} onCounting={this._onChange}>
                    {this.state.time ? `重新发送(${time}秒)` : '发送验证码'}
                  </ReactCountdown>
                </Button>
              </Col>
            </Row>

            <Row align="middle" type="flex">
              <Col span={4}>
                <strong className="f14 c-gray">手机验证码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder=""/>
              </Col>
            </Row>

            <Row align="middle" type="flex">
              <Col span={4}>
                <strong className="f14 c-gray">密码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="密码"/>
              </Col>
            </Row>

            <Row align="middle" type="flex">
              <Col span={4}>
                <strong className="f14 c-gray">再次输入密码:</strong>
              </Col>
              <Col span={7}>
                <Input placeholder="再次输入密码"/>
              </Col>
            </Row>

            <footer className="tl">
              <Row>
                <Col span={7} offset={4}>
                  <Button style={{width: '120px'}} type="primary" onClick={this._onSubmit}>下一步</Button>
                </Col>
              </Row>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

