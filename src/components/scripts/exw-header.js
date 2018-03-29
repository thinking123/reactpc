import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import AppBase, {$api, $store} from 'components/scripts/index';
import logoImg from 'images/logo.png';

export default class extends Component {

  _onToggle = () => {
  };

  render() {
    //const {sidebarCollapsed} = AppBase.$.memory;
    return (
      <Header className="rel lrfix_ ">
        <div className="login-logo">
          <img className="wp-10" src={logoImg}/>
        </div>
        <div className="right">
          <Icon type="user"/>
          <span className="mr10">Hello Admin</span>
          <a href="#">Logout</a>
        </div>
      </Header>
    )
  }
}
