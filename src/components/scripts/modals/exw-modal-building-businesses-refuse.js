import React, {Component} from 'react';
import classNames from 'classnames';
import {Modal, Input} from 'antd';
import AppBase, {
  $api, $store, $app, $config, $modal,
} from 'components/scripts/index';

export default class extends Component {

  _onClose = e => {
    $modal.hide('building-businesses-refuse');
  };

  render() {
    const {className, children, ...props} = this.props;
    const {modalBuildingBusinessesRefuse} = AppBase.$.memory;
    return (
      <Modal title={'拒绝理由'} {...props}
             onOk={this._onClose}
             onCancel={this._onClose}
             visible={modalBuildingBusinessesRefuse}
             className={ classNames("exw-modal-building-businesses-refuse", className) }>
        <Input.TextArea placeholder="请填写拒绝申请的理由"/>
      </Modal>
    )
  }
}
