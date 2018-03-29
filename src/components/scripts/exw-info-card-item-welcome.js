import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, username, time, ...props} = this.props;
    return (
      <div data-depth="2" data-hover="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item-welcome", className) } {...props}>
        <span className="text1">欢迎你，{username}</span>
        <span className="text2">上次登录时间: {time}</span>
      </div>
    )
  }
}
