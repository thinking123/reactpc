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
        $modal.show('building-businesses-refuse');
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
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left" />
            <span>返回列表</span>
          </a>
        </h3>
        <h2 className="f20 mb20 b">报馆详情</h2>
        <h3 className="sub-title">
          <span className="b f14">有部分材料申请被拒绝，请修改并重新提交</span>
        </h3>

        <dl className="item">
          <dt className="mb20 b">个人信息 { JSON.stringify(this.params)}</dt>
          <dd>
            <ul className="lfix_">
              <li>
                <strong>姓名:</strong>
                <em>afei</em>
              </li>
              <li>
                <strong>职位:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li>
                <strong>身份证:</strong>
                <em>123456789012345678</em>
              </li>
              <li>
                <strong>微信号:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>邮寄地址:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li style={{width: '100%'}}  className="mt10">
                <strong>身份证扫描件:</strong>
                <em className="c-9">
                  <ReactSmartPhoto group="id" items={[
                    {
                      href: 'http://placeholder.qiniudn.com/180x180',
                      src: 'http://placeholder.qiniudn.com/80x80',
                      caption: '身份证'
                    }
                  ]}/>
                </em>
              </li>
            </ul>
          </dd>
        </dl>

        <hr className="my20"/>

        <dl className="item">
          <dt className="mb20 b">公司信息</dt>
          <dd>
            <ul className="lfix_">
              <li>
                <strong>公司名称:</strong>
                <em>公司名称</em>
              </li>
              <li>
                <strong>传真:</strong>
                <em className="c-9">123-456-7899</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>办公地址:</strong>
                <em>办公地址</em>
              </li>
              <li>
                <strong>法人姓名:</strong>
                <em className="c-9">法人姓名</em>
              </li>
              <li style={{width: '100%'}}>
                <strong>法人手机号:</strong>
                <em className="c-9">12345678901</em>
              </li>
              <li>
                <strong>法人身份证号:</strong>
                <em className="c-9">123456789012345678</em>
              </li>
              <li>
                <strong>法人座机:</strong>
                <em className="c-9">未填写</em>
              </li>
              <li style={{width: '100%'}}  className="mt10">
                <strong>法人身份证扫描件:</strong>
                <em className="c-9">
                  <ReactSmartPhoto group="cid" items={[
                    {
                      href: 'http://placeholder.qiniudn.com/180x180',
                      src: 'http://placeholder.qiniudn.com/80x80',
                      caption: '法人身份证扫描件'
                    }
                  ]}/>
                </em>
              </li>
              <li style={{width: '100%'}} className="mt10">
                <strong>公司营业执照:</strong>
                <em className="c-9">
                  <ReactSmartPhoto group="cid" items={[
                    {
                      href: 'http://placeholder.qiniudn.com/180x180',
                      src: 'http://placeholder.qiniudn.com/80x80',
                      caption: '公司营业执照'
                    }
                  ]}/>
                </em>
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

