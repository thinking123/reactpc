import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, icon, title, score, count, ...props} = this.props;
    return (
      <div data-depth="2" data-hover="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item-exception", className) } {...props}>
        <div className="top">
            <Icon type={icon}/>
            <span className="ml5">{title}</span>
        </div>
        <div className="bottom">
          <div className="item item-left">
            <p className="span">违规扣分</p>
            <p className="span span-bottom">{score}</p>
          </div>
          <div className="item">
            <p className="span">违规条数</p>
            <p className="span span-bottom">{count}</p>
          </div>
        </div>
      </div>

    )
  }
}
