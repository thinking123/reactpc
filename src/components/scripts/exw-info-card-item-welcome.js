import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, username, time, ...props} = this.props;
    return (
      <div data-depth="2" data-hoverable="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item-welcome", className) } {...props}>
        <p className="text1">欢迎你，{username}</p>
        <p className="text2">上次登录时间: {time}</p>
      </div>
    )
  }
}
