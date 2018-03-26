import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge} from 'antd';
import AppBase, {$config, $route} from 'components/scripts/index';


export default class extends Component {

  get applyFinanceView() {
    const {activeRoute, activeState, openKeys} = AppBase.$.memory;
    return (
      <Menu theme="dark" mode="inline" className="f14"
            selectedKeys={[activeRoute]}
            openKeys={[openKeys]}
            onClick={this._onMenuClick}>
        <Menu.SubMenu key="/admin/apply-files" onTitleClick={this._onSubMenuClick}
                      title={<span className="f14">报馆资料审核</span>}>
          <Menu.Item key="/admin/dashboards/index">
            <Icon type="appstore-o"/><span>首页</span>
          </Menu.Item>
          <Menu.Item key={`/admin/building-businesses/index/${activeState || 1}`}>
            <Icon type="hdd"/>
            <Badge count={5} offset={[0, 20]}>
              <span className="nav-text">搭建商</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="/admin/newspaper-offices/index">
            <Icon type="database"/>
            <span className="nav-text">报馆</span>
          </Menu.Item>
          <Menu.Item key="/admin/builders/index">
            <Icon type="tool"/>
            <span className="nav-text">施工人员</span>
          </Menu.Item>
          <Menu.Item key="/admin/truck-infomations/index">
            <Icon type="rocket"/>
            <span className="nav-text">货车信息</span>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="/admin/finance" onTitleClick={this._onSubMenuClick} title={<span className="f14">财务</span>}>
          <Menu.Item key="/admin/payment-orders/index">
            <Icon type="file"/>
            <span className="nav-text">付款通知单</span>
          </Menu.Item>
          <Menu.Item key="/admin/bank-slips/index">
            <Icon type="file"/>
            <span className="nav-text">银行汇款水单</span>
          </Menu.Item>
          <Menu.Item key="/admin/receipts/index">
            <Icon type="file"/>
            <span className="nav-text">发票</span>
          </Menu.Item>
          <Menu.Item key="/admin/service-costs/index">
            <Icon type="file"/>
            <span className="nav-text">现场服务费用</span>
          </Menu.Item>
          <Menu.Item key="/admin/deposits/index">
            <Icon type="file"/>
            <span className="nav-text">押金</span>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="/admin/manage" onTitleClick={this._onSubMenuClick} title={<span className="f14">管理</span>}>
          <Menu.Item key="/admin/illegal-records/index">
            <Icon type="exception"/>
            <span className="nav-text">违规记录</span>
          </Menu.Item>
          <Menu.Item key="/admin/certificate-records/index">
            <Icon type="calculator"/>
            <span className="nav-text">发证记录</span>
          </Menu.Item>
          <Menu.Item key="/admin/notifications/index">
            <Icon type="mail"/>
            <span className="nav-text">通知管理</span>
          </Menu.Item>
          <Menu.Item key="/admin/account-settings/index">
            <Icon type="setting"/>
            <span className="nav-text">账号设置</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  }

  get settingView() {
    const {activeRoute, openKeys} = AppBase.$.memory;
    return (
      <Menu theme="dark" mode="inline" className="f14"
            selectedKeys={[activeRoute]}
            openKeys={[openKeys]}
            onClick={this._onMenuClick}>
        <Menu.SubMenu key="/admin/exhibition-config" onTitleClick={this._onSubMenuClick}
                      title={<span className="f14">展会配置</span>}>
          <Menu.Item key="/admin/exhibitors/index">
            <Icon type="exception"/>
            <span className="nav-text">参展商管理</span>
          </Menu.Item>
          <Menu.Item key="/admin/workers/index">
            <Icon type="calculator"/>
            <span className="nav-text">工作人员</span>
          </Menu.Item>
          <Menu.Item key="/admin/exhibition-web/index">
            <Icon type="mail"/>
            <span className="nav-text">展会配置和管理</span>
          </Menu.Item>
          <Menu.Item key="/admin/building-businesses-manage/index">
            <Icon type="setting"/>
            <span className="nav-text">搭建商管理</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }

  check() {
    const {activeRoute} = AppBase.$.memory;
    switch (true) {
      case activeRoute.indexOf('/admin/dashboards/index') > -1:
      case activeRoute.indexOf('/admin/building-businesses/index') > -1:
      case activeRoute.indexOf('/admin/truck-infomations/index') > -1:
      case activeRoute.indexOf('/admin/newspaper-offices/index') > -1:
      case activeRoute.indexOf('/admin/builders/index') > -1:
        AppBase.$.memory = {openKeys: '/admin/apply-files'};
        break;
      case activeRoute.indexOf('/admin/payment-orders/index') > -1:
      case activeRoute.indexOf('/admin/bank-slips/index') > -1:
      case activeRoute.indexOf('/admin/receipts/index') > -1:
      case activeRoute.indexOf('/admin/service-costs/index') > -1:
      case activeRoute.indexOf('/admin/deposits/index') > -1:
        AppBase.$.memory = {openKeys: '/admin/finance'};
        break;
      case activeRoute.indexOf('/admin/illegal-records/index') > -1:
      case activeRoute.indexOf('/admin/certificate-records/index') > -1:
      case activeRoute.indexOf('/admin/notifications/index') > -1:
      case activeRoute.indexOf('/admin/account-settings/index') > -1:
        AppBase.$.memory = {openKeys: '/admin/manage'};
        break;
      case activeRoute.indexOf('/admin/exhibitors/index') > -1:
      case activeRoute.indexOf('/admin/workers/index') > -1:
      case activeRoute.indexOf('/admin/exhibition-web/index') > -1:
      case activeRoute.indexOf('/admin/building-businesses-manage/index') > -1:
        AppBase.$.memory = {openKeys: '/admin/exhibition-config'};
        break;
      default:
        console.log(activeRoute);
    }
  }

  _onMenuClick = e => {
    AppBase.$.memory = {activeRoute: e.key};
    $route.push(e.key);
  };

  _onSubMenuClick = e => {
    AppBase.$.memory = {openKeys: e.key};
  };

  componentDidMount() {
    this.check();
  }

  render() {
    const {menuKey} = AppBase.$.session;
    return this[`${nx.camelize(menuKey)}View`];
  }
}