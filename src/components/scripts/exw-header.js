import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge, Divider, Dropdown} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import AppBase, {$api, $store, $route} from 'components/scripts/index';
import logoImg from 'images/logo.png';

export default class extends Component {

  get overlayView() {
    return (
      <Menu onClick={this.cmd}>
        <Menu.Item key="user">
          用户中心
        </Menu.Item>
        <Menu.Item key="logout">
          注销
        </Menu.Item>
      </Menu>
    );
  }

  msg = () => {
    AppBase.msg('msg!');
  };

  cmd = inEvent => {
    const {key} = inEvent;
    switch (key) {
      case 'logout':
        $route.push('/');
        break;
    }
  };


  render() {
    return (
      <Header>
        <nav className="app-col auto rel h100 lrfix_ ">
          <div className="login-logo">
            <img className="wp-10" src={logoImg}/>
          </div>
          <div className="h100 lh-20 webkit-sassui-vim-center mr30 right">
            <div className="webkit-sassui-icon-text" style={{width: '246px'}}>
              <Icon type="environment-o" className="mr10 dtbc" style={{fontSize: '40px'}}/>
              <span className="dtbc">2018中国（广州）国际机器人、智能装备及制造技术展</span>
            </div>
            <Divider type="vertical" className={'mx30'} style={{height: '70%'}}/>
            <Badge count={10} offset={[0, 15]} className="mr50">
              <button className="bgdn" onClick={this.msg}>
                <Icon type="notification" className="mr5 f20"/>
                <span>消息</span>
              </button>
            </Badge>

            <Dropdown overlay={this.overlayView}>
              <span className="f20">
                <Icon type="user"/>
                <Icon type="down"/>
              </span>
            </Dropdown>
          </div>
        </nav>
      </Header>
    )
  }
}
