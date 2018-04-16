import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Tag, Icon, Alert} from 'antd';
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
    const {profileDetail} = AppBase.$.memory;

    return (
      <div className="abs trbl0 p20 bg-f my-exhibition-show-view">

        <h2 className="f20 mb20 b">个人和公司</h2>
        <Alert className="mb10" message="信息正在审核中" type="warning" showIcon/>
        <dl className="item">
          <dt className="mb20 b">个人信息</dt>

          <dd>
            <ul className="lfix_">
              <li>
                <strong>姓名:</strong>
                <em className="c-9">{profileDetail.user_name}</em>
              </li>
              <li >
                <strong>职务:</strong>
                <em className="c-9">{profileDetail.job_title}</em>
              </li>
              <li >
                <strong>身份证号:</strong>
                <em className="c-9">{profileDetail.id_number}</em>
              </li>
              <li>
                <strong>微信号:</strong>
                <em className="c-9">{profileDetail.wechat_id}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>邮箱:</strong>
                <em className="c-9">{profileDetail.email}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>邮寄地址:</strong>
                <em className="c-9">{profileDetail.mail_address}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>身份证扫描</strong>
                <em className="c-9">{profileDetail.id_scan_image}</em>
              </li>
            </ul>
          </dd>
        </dl>

        <div className="blank-20" />

        <dl className="item">
          <dt className="mb20 b">公司信息</dt>

          <dd>
            <ul className="lfix_">
              <li>
                <strong>公司名称:</strong>
                <em className="c-9">{profileDetail.company_name}</em>
              </li>
              <li >
                <strong>传真:</strong>
                <em className="c-9">{profileDetail.fax}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>办公地址:</strong>
                <em className="c-9">{profileDetail.company_address}</em>
              </li>
              <li>
                <strong>法人姓名:</strong>
                <em className="c-9">{profileDetail.legal_person_name}</em>
              </li>
              <li >
                <strong>法人手机号:</strong>
                <em className="c-9">{profileDetail.legal_person_phone}</em>
              </li>
              <li>
                <strong>法人身份证号:</strong>
                <em className="c-9">{profileDetail.legal_person_id_number}</em>
              </li>
              <li>
                <strong>法人座机:</strong>
                <em className="c-9">{profileDetail.legal_person_work_phone}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>法人身份证扫描件</strong>
                <em className="c-9">{profileDetail.legal_person_id_scan_image}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>公司营业执照</strong>
                <em className="c-9">{profileDetail.company_business_license_scan_image}</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>其他资质扫描件</strong>
                <em className="c-9">{profileDetail.company_other_license_scan_image}</em>
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

    $api.profile_detail({user_id: 123123}).then(resp=>{
      AppBase.$.memory = {
        profileDetail: resp.data
      };
    })
  }

  render() {
    return this.pureLayout();
  }
}

