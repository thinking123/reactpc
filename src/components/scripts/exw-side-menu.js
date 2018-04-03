import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge} from 'antd';
import AppBase, {$config, $route} from 'components/scripts/index';


export default class extends Component {


  _onMenuClick = e => {
    AppBase.$.memory = {activeRoute: e.key};
    $route.push(e.key);
  };

  render() {
    const {className, children, ...props} = this.props;
    const {activeRoute, activeState} = AppBase.$.memory;

    return (
      <Menu theme="dark" mode="inline" className="f14"
            defaultSelectedKeys={[activeRoute]}
            onClick={this._onMenuClick}>
        <Menu.Item key="/admin/dashboards/index">
          <Icon type="appstore-o"/>
          <span className="nav-text">首页</span>
        </Menu.Item>
        <Menu.Item key={`/admin/my-exhibition/index/${activeState || 1}`}>
          <Icon type="hdd"/>
          <span className="nav-text">我的报馆</span>
        </Menu.Item>
        <Menu.Item key="/admin/worker/index/1">
          <Icon type="tool"/>
          <span className="nav-text">施工人员</span>
        </Menu.Item>
        <Menu.Item key="/admin/payment-notice/index">
          <Icon type="pay-circle"/>
          <span className="nav-text">付款通知单</span>
        </Menu.Item>
        <Menu.Item key="/admin/bank-flow/index/1">
          <Icon type="barcode"/>
          <span className="nav-text">汇款水单和发票</span>
        </Menu.Item>
        <Menu.Item key="/admin/notifications/index">
          <Icon type="notification"/>
          <span className="nav-text">通知</span>
        </Menu.Item>
        <Menu.Item key="/admin/illegal-records/index">
          <Icon type="exception"/>
          <span className="nav-text">违规记录</span>
        </Menu.Item>
        <Menu.Item key="/admin/account-settings/index">
          <Icon type="setting"/>
          <span className="nav-text">账号设置</span>
        </Menu.Item>
        <Menu.Item key="/admin/account-settings11/index">
          <Icon type="user"/>
          <span className="nav-text">个人和公司</span>
        </Menu.Item>
      </Menu>
    )
  }
}
