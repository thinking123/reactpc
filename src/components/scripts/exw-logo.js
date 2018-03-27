import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Dropdown} from 'antd';
import AppBase, {$api, $app, $store} from 'components/scripts/index';

export default class extends Component {
  static defaultProps = {
    title: '展会审核系统',
    sub: '北京国机联创广告有限公司',
    arrow: false
  };

  render() {
    const {className, title, sub, arrow, selectable, ...props} = this.props;
    const {sidebarCollapsed} = AppBase.$.memory;
    return (
      <section {...props} className={ classNames("c-f dib webkit-sassui-vim-center exw-logo", className) }>
        <img src={require('images/logo.png')} className="left" width="48" alt=""/>
        {
          !sidebarCollapsed && (
            <div className="tl ml10 mr3 webkit-sassui-vim-center right">
              <div className="bd">
                <h3 className="f20 c-f b hd">{title}</h3>
                <p className="f10 mt3 ft">{sub}</p>
              </div>
              {arrow && <Icon type="right"/>}
            </div>
          )
        }
      </section>
    )
  }
}
