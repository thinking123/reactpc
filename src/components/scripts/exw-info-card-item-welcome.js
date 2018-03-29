import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, img, title, count, agree, reject,apply, ...props} = this.props;
    return (
      <div data-depth="2" data-hover="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item", className) } {...props}>
        <span className="card-welcome-text1">欢迎你，{title}</span>
        <span className="card-welcome-text2">{count}</span>
      </div>
    )
  }
}
