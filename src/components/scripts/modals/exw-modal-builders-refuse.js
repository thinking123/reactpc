import React, {Component} from 'react';
import classNames from 'classnames';
import {Modal, Input, Checkbox, Alert} from 'antd';
import AppBase, {
  $api, $store, $app, $config, $modal,
} from 'components/scripts/index';

export default class extends Component {

  _onClose = e => {
    $modal.hide('builders-refuse');
  };

  render() {
    const {className, children, ...props} = this.props;
    const {modalBuildersRefuse} = AppBase.$.memory;
    return (
      <Modal title={'新增发票'} {...props}
             onOk={this._onClose}
             onCancel={this._onClose}
             okText="确认"
             cancelText="取消"
             className={ classNames("exm-modal-builders-refuse", className) }>
        <div className="my-exhibition-show-view">
        <dl className="item">
          <dd>
            <ul className="lfix_">
              <li>
                <strong>发票类型:</strong>
                <em className="c-9">增值税专用发票</em>
              </li>
              <li >
                <strong>汇款公司名称:</strong>
                <em className="c-9">名称</em>
              </li>
              <li>
                <strong>金额(￥):</strong>
                <em className="c-9">30,000</em>
              </li>
              <li>
                <strong>汇款公司账号:</strong>
                <em className="c-9">2938472983749827</em>
              </li>
              <li >
                <strong>一般人纳税证明:</strong>
                <em className="c-9"></em>
              </li>
              <li>
                <strong>开户行:</strong>
                <em className="c-9">开户行</em>
              </li>
              <li>
                <strong>纳税人识别号</strong>
                <em className="c-9">识别号</em>
              </li>
              <li>
                <strong>电话</strong>
                <em className="c-9">13000000000</em>
              </li>
              <li>
                <strong>地址</strong>
                <em className="c-9">地址</em>
              </li>
            </ul>
          </dd>
        </dl>
          </div>
      </Modal>
    )
  }
}
