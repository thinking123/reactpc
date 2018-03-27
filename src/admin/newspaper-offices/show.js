import  AppBase, {
  $api, $route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Tag, Tabs, Icon} from 'antd';
import ReactSmartPhoto from 'react-smart-photo';
import ReactStatusManager from 'react-status-manager';

@mixin(['pure-layout', 'match'])
export default class extends AntAbstractControllerIndex {

  layout = 'pure';

  state = {
    tabId: '1'
  };

  footerView() {
    const {tabId} = AppBase.$.memory;
    const statusList = ['info', 'list'];
    return (
      <ReactStatusManager status={tabId} statusList={statusList}>
        <section className="tr ml10_ ml__">
          <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
            <Icon type="left"/>
            <span>返回</span>
          </Tag>
          <Tag color="#46A96A" onClick={this._onClick.bind(this, 'next')}>下一步</Tag>
        </section>

        <section className="tr ml10_ ml__">
          <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
            <Icon type="left"/>
            <span>返回</span>
          </Tag>
          <Tag color="#486AB0" onClick={this._onClick.bind(this, 'prev')}>上一步</Tag>
          <Tag color="#F34D45" onClick={this._onClick.bind(this, 'refuse')}>拒绝</Tag>
          <Tag color="#46A96A" onClick={this._onClick.bind(this, 'pass')}>通过</Tag>
        </section>
      </ReactStatusManager>
    );
  }

  childView() {
    const {tabId} = AppBase.$.memory;
    return (
      <div className="abs trbl0 p20 bg-f building-businesses-show-view">
        <Tabs activeKey={tabId} onChange={this._onChange}>
          <Tabs.TabPane tab="展位和搭建商信息" key="info">Content of Tab Pane 1</Tabs.TabPane>
          <Tabs.TabPane tab="费用清单" key="list">Content of Tab Pane 2</Tabs.TabPane>
        </Tabs>
      </div>
    );
  }

  componentDidMount() {
    this.update('info');
  }

  update(inTabId) {
    AppBase.$.memory = {tabId: inTabId,};
    AppBase.$.memory = {footer: this.footerView()};
  }


  _onClick = inStatus => {
    switch (inStatus) {
      case 'back':
        $route.back();
        break;
      case 'prev':
        this.update('info');
        break;
      case 'next':
        this.update('list');
        break;
      default:
        AppBase.notify(`You Click status: => ${inStatus}`);
    }
  };

  _onChange = inTabId => {
    this.update(inTabId);
  };

  render() {
    return this.pureLayout();
  }
}

