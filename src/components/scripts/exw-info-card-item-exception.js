import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, icon, title, score, count, ...props} = this.props;
    return (
      <div data-depth="2" data-hoverable="true"
           className={classNames("bdr-3 webkit-sassui-shadow-box bg-f exw-info-card-item-exception", className)} {...props}>
        <div className="top">
          <Icon type={icon}/>
          <span className="ml5">{title}</span>
        </div>
        <div className="lfix_ mt14 bottom">
          <div className="wp-5 item-left">
            <header className="f14 pb10 hd">违规扣分</header>
            <p className='f32'>{score}</p>
          </div>
          <div className="wp-5">
            <header className="f14 pb10 hd">违规条数</header>
            <p className='f32'>{count}</p>
          </div>
        </div>
      </div>

    )
  }
}
