import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Tag, Icon} from 'antd';
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
    return (
      <div className="abs trbl0 p20 bg-f my-exhibition-show-view">

        <h2 className="f20 mb20 b">个人和公司</h2>
        <h3 className="sub-title">
          <span className="b f14">信息正在审核中</span>
        </h3>

        <dl className="item">
          <dt className="mb20 b">个人信息</dt>

          <dd>
            <ul className="lfix_">
              <li>
                <strong>姓名:</strong>
                <em className="c-9">姓名</em>
              </li>
              <li >
                <strong>职务:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li >
                <strong>身份证号:</strong>
                <em className="c-9">123456789012345678</em>
              </li>
              <li>
                <strong>微信号:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>邮箱:</strong>
                <em className="c-9">30,000</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>邮寄地址:</strong>
                <em className="c-9">邮寄地址</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>身份证扫描</strong>
                <em className="c-9">20,000</em>
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="item">
          <dt className="mb20 b">公司信息</dt>

          <dd>
            <ul className="lfix_">
              <li>
                <strong>公司名称:</strong>
                <em className="c-9">公司名称</em>
              </li>
              <li >
                <strong>传真:</strong>
                <em className="c-9">123-456-7899</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>办公地址:</strong>
                <em className="c-9">办公地址</em>
              </li>
              <li>
                <strong>法人姓名:</strong>
                <em className="c-9">法人姓名</em>
              </li>
              <li >
                <strong>法人手机号:</strong>
                <em className="c-9">法人手机号</em>
              </li>
              <li>
                <strong>法人身份证号:</strong>
                <em className="c-9">123456789012345678</em>
              </li>
              <li>
                <strong>法人座机:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>法人身份证扫描件</strong>
                <em className="c-9">13000000000</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>公司营业执照</strong>
                <em className="c-9">地址</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>其他资质扫描件</strong>
                <em className="c-9">地址</em>
              </li>
            </ul>
          </dd>
        </dl>

      </div>
    );
  }

  componentDidMount() {
    AppBase.$.memory = {
      footer: this.footerView()
    };
  }

  render() {
    return this.pureLayout();
  }
}

