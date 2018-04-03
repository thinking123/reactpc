import {Card, Form, Icon, Input, Button} from 'antd';
import bgImg from 'images/bg.jpg';
import logoImg from 'images/logo.png';
import ReactAntForm from 'react-ant-form';
import AppBase, {
  $api, $route, $app, $config,
} from 'components/scripts/index';
export default Form.create()(class extends React.Component {

  state = {
    formItems: [
      {
        label: '登陆手机号',
        field: 'username',
        component: Input,
        props: {
          size: 'large',
          placeholder: '填写手机号'
        }
      },
      {
        label: '密码',
        field: 'password',
        component: Input,
        props: {
          size: 'large',
          type: 'password',
          placeholder: '填写密码'
        }
      }
    ]
  };

  _onSubmit = (e) => {
    console.log(e);
    $app.successPush('登录成功', '/admin/dashboards/index');
  };

  render() {
    return (
      <section className="login-view h100">
        <div className="rel login-left">
          <div className="login-logo">
              <img className="wp-10 login-logo-img" src={logoImg}/>
          </div>


          <div className="bg-f bdr-5 p30">
            <ReactAntForm formLayout={null}
                          submitLabel={null}
                          submitProps={{
                            className: 'wp-10 mb0',
                            children: '登录',
                            size: 'large',
                            type: 'primary',
                            htmlType: 'submit'
                          }}
                          onSubmit={this._onSubmit}
                          items={this.state.formItems}/>
            <footer className="tc mt10 lrfix_ ft">
              <span>还没有账号 <a href="#/register/index">注册</a></span>
              <a href="#">忘记密码？</a>
            </footer>
          </div>


          <footer className="abs b0 wp-10 lh-20 mb20 tc">
            <p>版权所有：北京国机联创广告有限公司</p>
            <p>ICP备案号：{$config.ICP_INFO}</p>
          </footer>
        </div>
        <div className="login-right">
            <lable className="login-lable1">
                专业的展会管理团队
            </lable>
            <lable className="login-lable2">
                拥有10000平米以上的制作工厂百余名专业技术人员
            </lable>
            <lable className="login-lable3">
                每年负责的主场和特装面积达500000平方米
            </lable>
            <img className="login-right-img" src={bgImg}></img>
        </div>
        <div className="login-right2"></div>
      </section>
    );
  }

});
