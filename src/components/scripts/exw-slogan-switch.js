import React, {Component} from 'react';
import {Layout, Menu, Icon, Dropdown} from 'antd';
import classNames from 'classnames';
import AppBase, {
  $api, $app, $config, $route,
  ExwLogo
} from 'components/scripts/index';

export default class extends Component {

  get overlayView() {
    const {menuKey} = AppBase.$.session;
    return (
      <ul className="exw-slogan-switch-overlay">
        <li className="item" key={'finance'} onClick={this._onClick.bind(this, 'apply-finance')}>
          { menuKey === 'apply-finance' && <Icon type="check"/> }
          <span>审核 + 财务</span>
        </li>
        <li className="item" key={'config-system'} onClick={this._onClick.bind(this, 'setting')}>
          { menuKey === 'setting' && <Icon type="check"/> }
          <span>展会配置系统</span>
        </li>
      </ul>
    )
  }

  _onClick = inKey => {
    const activeRoute = inKey === 'apply-finance' ? '/admin/dashboards/index' : '/admin/exhibitors/index';
    const openKeys = inKey === 'apply-finance' ? '/admin/apply-files' : '/admin/exhibition-config';
    AppBase.$.session = {menuKey: inKey};
    AppBase.$.memory = {activeRoute, openKeys};
    $route.push(activeRoute);
  };

  render() {
    const {className, children, ...props} = this.props;
    const {menuKey} = AppBase.$.session;
    const title = menuKey === 'apply-finance' ? '审核 + 财务' : '展会配置系统';

    return (
      <Dropdown overlay={this.overlayView} trigger={['click']}>
        <div className="mb10 bg-blue-a tc py30 exw-slogan-switch">
          <ExwLogo title={title}/>
        </div>
      </Dropdown>
    )
  }
}
