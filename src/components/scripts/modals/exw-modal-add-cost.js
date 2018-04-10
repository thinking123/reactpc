import React, {Component} from 'react';
import classNames from 'classnames';
//import {Modal, Input, Checkbox, Alert, Row, Col, Select, Button, Upload} from 'antd';
import AppBase, {
  $api, $store, $app, $config, $modal,
} from 'components/scripts/index';


// import AppBase from 'components/scripts/index';
import Details from 'components/mixins/details';
// import { $route } from 'components/scripts/index';
import { Modal, Input, Checkbox, Alert, Row, Col, Select, Button, Upload, Icon } from 'antd';

let { Merger, Info, Image, Tools } = Details;

let {Dragger} = Upload;

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
             visible={modalBuildersRefuse}
             className={ classNames("exm-modal-builders-refuse", className) }>
        <div className="my-exhibition-show-view">
        <dl>
        <dd>
          <Row>
            <Col span={3}>
              <strong>发票类型:</strong>
            </Col>
            <Col span={10}>
              <Select
                showSearch
                placeholder={"选择发票类型"}
                optionFilterProp="children"
                // filterOption={this.filterOption}
                size="large"
              >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="tom">Tom</Select.Option>
              </Select>
            </Col>
          </Row>
        <Row>
        <Col span={5}>
        <strong>汇款公司名称:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="公司名称"  />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={5}>
        <strong>金额(服务费):</strong>
        </Col>
        <Col span={5}>
        <label>10,000</label>
        </Col>
        </Row>
        <Row>
        <Col span={5}>
        <strong>汇款公司账号:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="例："  />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={5}>
        <strong>开户行:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="例："  />
        </Col>
        </Row>
        <Dragger
        multiple
        beforeUpload={()=> { return false; }}
        onChange={() => { console.log("选择附件") }}
        >
        <p className="ant-upload-hint">
        上传一般纳税人证明
        <Button size="large">添加文件</Button>
        </p>
        </Dragger>
        <p>注意：请上传一般纳税人证明，单个文件不超过1M，仅限JPG格式。</p>
        <Row>
        <Col span={5}>
        <strong>纳税人识别号:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="例："  />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={5}>
        <strong>电话:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="例：1300000000"  />
        </Col>
        </Row>
        <Row>
        <Col span={5}>
        <strong>地址:</strong>
        </Col>
        <Col span={19}>
        <Input placeholder="地址："  />
        </Col>
        </Row>

        <h2 className="b">发票收件人信息</h2>
        <Row>
        <Col span={5}>
        <strong>收件人姓名:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="收件人姓名"  />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={5}>
        <strong>收件人手机号:</strong>
        </Col>
        <Col span={5}>
        <Input placeholder="收件人手机号"  />
        </Col>
        </Row>
        <Row>
        <Col span={5}>
        <strong>收件人地址:</strong>
        </Col>
        <Col span={19}>
        <Input placeholder="收件人地址"  />
        </Col>
        </Row>
        </dd>
        </dl>
        </div>
      </Modal>
    )
  }
}
