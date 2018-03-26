import React, {Component} from 'react';
import {Row, Col, Tag, Icon} from 'antd';
import AppBase, {
  $api, $store,
  ExwInfoCardItem,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import ReactButton from 'react-button';

@mixin(['pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  _onClick = inStatus => {
    AppBase.notify(`You Click status: => ${inStatus}`);
  };

  footerView() {
    return (
      <div className="tr ml10_ ml__ test-footer-view">
        <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
          <Icon type="left"/>
          <span>返回</span>
        </Tag>
        <Tag color="#F34D45" onClick={this._onClick.bind(this, 'refuse')}>拒绝</Tag>
        <Tag color="#46A96A" onClick={this._onClick.bind(this, 'pass')}>通过</Tag>
      </div>
    );
  }

  childView() {
    return (
      <div className="p20 newspaper-office-view">
        Child View!
      </div>
    );
  }

}
