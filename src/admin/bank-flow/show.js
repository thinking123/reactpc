import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Tag, Alert, Icon, Button} from 'antd';
import ReactSmartPhoto from 'react-smart-photo';

@mixin(['pure-layout', 'match'])
export default class extends React.Component {

  layout = 'pure';

  _onClick = inStatus => {
    switch (inStatus) {
      case 'back':
        $route.back();
        break;
      case 'refuse':
        $modal.show('my-exhibition-refuse');
        break;
      default:
        AppBase.notify(`You Click status: => ${inStatus}`);
    }
  };

  footerView() {
    return (
      <div className="lrfix_">
        <label className="left" style={{lineHeight: '34px'}}>
          <span>搭建商类别：</span>
          <select>
            <option value="1">搭建商1</option>
            <option value="2">搭建商2</option>
          </select>
        </label>
        <div className="right">
          <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
            <Icon type="left"/>
            <span>返回</span>
          </Tag>
          <Tag color="#F34D45" onClick={this._onClick.bind(this, 'refuse')}>拒绝</Tag>
          <Tag color="#46A96A" onClick={this._onClick.bind(this, 'pass')}>通过</Tag>
        </div>
      </div>
    );
  }

  childView() {
    const {remittanceReceiptDetail} = AppBase.$.memory;
    let invoice_info = remittanceReceiptDetail.invoice_info || {};
    let taxpayer_info = remittanceReceiptDetail.taxpayer_info || {};

    return (
      <div className="abs trbl0 p20 bg-f my-exhibition-show-view">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left"/>
            <span>返回列表</span>
          </a>
        </h3>
        <h2 className="f20 mb20 b">银行汇款水单详情</h2>

          <dl className="item">
            <dd>
              <ul className="lfix_">
                <li style={{width: '100%'}}>
                  <strong>支付的展位：</strong>
                  <div className="table-like bordered wp-10">
                    <Row className="table-like__header">
                      <Col span={6}>展位号</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>费用合计</Col>
                      <Col span={4}>押金</Col>
                      <Col span={4}>服务费</Col>
                    </Row>
                    <Row>
                      <Col span={6}>A101</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>30000</Col>
                      <Col span={4}>10000</Col>
                      <Col span={4}>20000</Col>
                    </Row>
                    <Row>
                      <Col span={6}>A103</Col>
                      <Col span={6}>参展商</Col>
                      <Col span={4}>30000</Col>
                      <Col span={4}>5000</Col>
                      <Col span={4}>25000</Col>
                    </Row>
                    <Row className="table-like__footer">
                      <Col span={6}>合计</Col>
                      <Col span={4} offset={6}>60000</Col>
                      <Col span={4}>15000</Col>
                      <Col span={4}>45000</Col>
                    </Row>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>

        <dl className="item">
          <dt className="mb20 b">银行汇款水单信息</dt>
          <dd><Alert message="通过 上次处理时间: 2018年1月4日" type="success" showIcon/></dd>
          <dd>
            <ul className="lfix_">
              <li>
                <strong>汇款公司名称:</strong>
                <em className="c-9">{invoice_info.company_name}</em>
              </li>
              <li >
                <strong>开户行:</strong>
                <em className="c-9">{invoice_info.account_bank}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>汇款公司账号:</strong>
                <em className="c-9">{invoice_info.remittance_company_bank_account}</em>
              </li>
              <li>
                <strong>汇款总额(￥):</strong>
                <em className="c-9">{invoice_info.remittance_amount}</em>
              </li>
              <li >
                <strong>押金金额(￥):</strong>
                <em className="c-9">{invoice_info.deposit_amount}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>开票金额(￥):</strong>
                <em className="c-9">{invoice_info.invoice_amount}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>银行汇款水单</strong>
                {/*//TODO 图片*/}
                <em className="c-9">{invoice_info.remittance_bill_scan_image}</em>
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="item">
          <dt className="mb20 b">发票信息</dt>
          <dd>
            <Alert message="通过 上次处理时间: 2018年1月4日" type="success" showIcon/>
          </dd>
          <dd>
            <ul className="lfix_">
              <li>
                <strong>提交时间:</strong>
                <em className="c-9">{taxpayer_info.created_at}</em>
              </li>
              <li>
                <strong>发票类型:</strong>
                <em className="c-9">{taxpayer_info.invoice_type}</em>
              </li>
              <li >
                <strong>汇款公司名称:</strong>
                <em className="c-9">{taxpayer_info.invoice_type}</em>
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
                {/*//TODO 图片*/}
                <em className="c-9">{taxpayer_info.general_taxpayer_certificate}</em>
              </li>
              <li>
                <strong>开户行:</strong>
                <em className="c-9">开户行</em>
              </li>
              <li>
                <strong>纳税人识别号</strong>
                <em className="c-9">{taxpayer_info.taxpayer_id_number}</em>
              </li>
              <li>
                <strong>电话</strong>
                <em className="c-9">{taxpayer_info.taxpayer_phone_number}</em>
              </li>
              <li>
                <strong>地址</strong>
                <em className="c-9">{taxpayer_info.taxpayer_address}</em>
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="item">
          <dt className="mb20 b">发票收件人信息</dt>
          <dd>
            <Alert message="未通过 上次处理时间: 2018年1月4日" type="error" showIcon/>
          </dd>
          <dd>
            <ul className="lfix_">
              <li>
                <strong>收件人姓名:</strong>
                <em className="c-9">{taxpayer_info.receiver_name}</em>
              </li>
              <li >
                <strong>收件人手机号:</strong>
                <em className="c-9">{taxpayer_info.receiver_phone_number}</em>
              </li>
              <li>
                <strong>收件人地址:</strong>
                <em className="c-9">{taxpayer_info.receiver_address}</em>
              </li>
            </ul>
          </dd>
        </dl>

        <footer className="tl">
          <Row>
            <Col span={7}>
              <Button style={{width: '120px'}} type="primary" onClick={this._writeReceipt}>开发票</Button>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    AppBase.$.memory = {
      footer: this.footerView()
    };

    $api.remittance_receipt_detail({invoice_id: 1}).then(resp=>{
      AppBase.$.memory = {
        remittanceReceiptDetail: resp.data
      };
    })
  }

  render() {
    return this.pureLayout();
  }

  _writeReceipt(){
    $modal.show('builders-refuse');
  }
}

