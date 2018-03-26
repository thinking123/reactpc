import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Dropdown, Button} from 'antd';

export default class extends Component {
  render() {
    const {className, icon, title, children, ...props} = this.props;
    return (
      <button {...props} className={ classNames("exw-entry-item", className) }>
        <Icon type={icon} style={{fontSize: '60px'}}/>
        <header className="my10 b f40" style={{fontSize: '36px'}}>{title}</header>
        <div className="f10 lh-22 bd">
          {children}
        </div>
      </button>
    )
  }
}
