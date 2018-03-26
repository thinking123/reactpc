import {Card, Form, Icon, Input, Button} from 'antd';
import ReactFullImage from 'react-full-image';
import bgImg from 'images/bg.jpg';
import ReactAntForm from 'react-ant-form';
import AppBase, {
  $api, $route, $app,
  ExwLogo
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
        <div className="login-left">
          <center><ExwLogo className="py20"/></center>
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
              <span>还没有账号 <a href="#">注册</a></span>
              <a href="#">忘记密码？</a>
            </footer>
          </div>
        </div>
        <div className="login-right">
          <img className="login-right-img" src={bgImg}/>
        </div>

        {/*<div className="p20 bdr-10 body shadow-6 webkit-sassui-transform-center-xy t375">*/}


      </section>
    );
  }

});
