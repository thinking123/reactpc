import  AppBase, {
  $api, $route, $modal,
  AntAbstractControllerIndex
} from 'components/scripts/index';
// import {Row, Col, Tag, Icon, Alert, Tabs, Tab} from 'antd';
import ReactSmartPhoto from 'react-smart-photo';

import { Row, Col, Button, Icon, Alert, Tabs, Tab, Tag, Collapse, Radio} from 'antd';
// import { $route } from 'components/scripts/index';
// import Toolbar from 'components/mixins/toolbar';
import Details from 'components/mixins/details';
import { SelectorInfo } from '../../components/mixins/details';
//
// let { Tabs, Tabs: { Tab } } = Toolbar;
let { Merger, Info, InputInfo, Divider, Title, Tools, Image } = Details;
let { Panel } = Collapse;

@mixin(['pure-layout', 'match'])
export default class extends AntAbstractControllerIndex {

  layout = 'pure';

  state = {
    tabId: '1',
    selectedList: null,
    multipleLists: [{
      status: 'approved',
      total: 55000,
      applyTime: '2018年1月4日',
      handleTime: '2018年1月4日',
      handler: '工作人员',
      usage: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      temp: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      waterAndGas: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      network: [{ type: '类型', unit: 121, amount: 1, price: 121 }]
    }, {
      status: 'pending',
      total: 15000,
      applyTime: '2018年1月4日',
      usage: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      temp: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      waterAndGas: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      network: [{ type: '类型', unit: 121, amount: 1, price: 121 }]
    }, {
      status: 'rejected',
      reason: '被拒原因',
      total: 35000,
      applyTime: '2018年1月4日',
      handleTime: '2018年1月4日',
      handler: '工作人员',
      usage: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      temp: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      waterAndGas: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      network: [{ type: '类型', unit: 121, amount: 1, price: 121 }]
    }, {
      status: 'pending',
      total: 15000,
      applyTime: '2018年1月4日',
      usage: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      temp: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      waterAndGas: [{ type: '类型', unit: 121, amount: 1, price: 121 }],
      network: [{ type: '类型', unit: 121, amount: 1, price: 121 }]
    }],
  };

  // _onClick = inStatus => {
  //   switch (inStatus) {
  //     case 'back':
  //       $route.back();
  //       break;
  //     case 'refuse':
  //       $modal.show('my-exhibition-refuse');
  //       break;
  //     default:
  //       AppBase.notify(`You Click status: => ${inStatus}`);
  //   }
  // };

  footerView() {
    const {tabId} = AppBase.$.memory;
    const statusList = ['info', 'list'];

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

  onSelectList(index) {
    console.log(index);
    // let { secondTab } = this.state;
    // secondTab.selectedList = index;
    // this.setState({ secondTab });
  };

  childView() {
    const {tabId} = AppBase.$.memory;
    let { dataList } = this;
    let {
      usage, temp, waterAndGas, network, manage, cert, safety
    } = this.state;
    const infoSpans = { text: 6, content: 18 };
    const halfSpans = { text: 3, content: 21 };


    return (
      <div className="abs trbl0 p20 bg-f my-exhibition-show-view">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left"/>
            <span>返回列表</span>
          </a>
        </h3>
        <h2 className="f20 mb20 b">报馆详情</h2>
        <Alert className="my10" message="有部分材料申请被拒绝，请修改并重新提交" type="warning"/>

        <Tabs activeKey={tabId} onChange={this._onChange}>
          <Tabs.TabPane tab="展位和搭建商信息" key="info">
            <dl className="item">
              <dt className="mb20 b">展位信息</dt>
              <dd>
                <ul className="lfix_">
                  <li>
                    <strong>展位:</strong>
                    <em>A103B</em>
                  </li>
                  <li>
                    <strong>参展商:</strong>
                    <em className="c-9">参展商</em>
                  </li>
                  <li>
                    <strong>提交时间:</strong>
                    <em>2017年12月20日</em>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl className="item">
              <dt className="mb20 b">搭建商信息</dt>
              <dd>
                <ul className="lfix_">
                  <li>
                    <strong>搭建商现场负责人:</strong>
                    <em className="c-9">负责人</em>
                  </li>
                  <li >
                    <strong>现场负责人手机号:</strong>
                    <em className="c-9">12345678909</em>
                  </li>
                </ul>
              </dd>
            </dl>

            <hr className="my20"/>

            <dl className="item">
              <dt className="mb20 b">文件</dt>
              <dd>
                <ul className="lfix_">
                  <li style={{width: '100%'}}>
                    <strong>展台类型结构:</strong>
                    <em>室内双层</em>
                  </li>

                  <li style={{width: '100%'}} className="mt10">
                    <strong>展位图纸:</strong>
                    <em className="c-9">
                      <ReactSmartPhoto group="cid" items={[
                        {
                          href: 'http://placeholder.qiniudn.com/180x180',
                          src: 'http://placeholder.qiniudn.com/80x80',
                          caption: '法人身份证扫描件'
                        },
                        {
                          href: 'http://placeholder.qiniudn.com/180x180',
                          src: 'http://placeholder.qiniudn.com/80x80',
                          caption: '法人身份证扫描件'
                        }
                      ]}/>
                    </em>
                  </li>
                  <li style={{width: '100%'}} className="mt10">
                    <strong>委托书:</strong>
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
                  <li style={{width: '100%'}} className="mt10">
                    <strong>电工证:</strong>
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
                  <li style={{width: '100%'}} className="mt10">
                    <strong>搭建委托书:</strong>
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
                  <li style={{width: '100%'}} className="mt10">
                    <strong>展商保证书:</strong>
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
                  <li style={{width: '100%'}} className="mt10">
                    <strong>安全责任书:</strong>
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
                  <li style={{width: '100%'}} className="mt10">
                    <strong>押金扣除标准:</strong>
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
          </Tabs.TabPane>
          <Tabs.TabPane tab="费用清单" key="list">
            <div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>展期用电</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <span>用电类型</span>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>临时搭建用电</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <span>临时搭建用电类型</span>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>用水、电服务</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <span>用水、电服务类型</span>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>有线网络</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <span>有线网络类型</span>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={19}>
                    <span>施工管理费</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={19}>
                    <em className="c-9">按展位实际面积计算，申请的展位面积为：20㎡</em>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>施工证</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <em className="c-9">辆/限3小时，超过时间按照200元/小时收延时费。<br />（车证押金为600元/张，未退回将扣除全部车证押金）</em>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>
              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>安全员袖章</span>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">单价</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">数量</em>
                  </Col>
                  <Col span={5}>
                    <em className="c-9">金额</em>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <em className="c-9">100㎡以下（含），1名安全员<br />安全员展会期间必须在展位，负责展位安全，监督施工人员安全作业，配合主场管理。</em>
                  </Col>
                  <Col span={5}>
                    <span>300</span>
                  </Col>
                  <Col span={5}>
                    <span>1</span>
                  </Col>
                  <Col span={5}>
                    <span>3000</span>
                  </Col>
                </Row>
              </div>

              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>滞纳金</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <em className="c-9">当前未超过截止时间，不需要缴纳</em>
                  </Col>
                </Row>
              </div>

              <div className="dotted-bottom wp-8 f14 c-0">
                <Row>
                  <Col span={9}>
                    <span>施工押金</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={9}>
                    <em className="c-9">按展位实际面积计算，申请的展位面积为：20㎡</em>
                  </Col>
                </Row>
              </div>

            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="多个费用清单（临时展示在这里）" key="lists">
            <div>
              <Collapse className="collapse" bordered={false}>
                {this.state.multipleLists.map((list, index) =>
                  <Panel
                    key={index}
                    header={(
                      <Row>
                        <Col span={20}>
                          <div className="collapse__title">
                            <strong className="c-gray">费用合计：</strong>
                            <span className="c-blue-a">{list.total}</span>
                          </div>
                          <div className="collapse__apply-time">
                            <strong className="c-gray">提交时间：</strong>
                            <span>{list.applyTime}</span>
                          </div>
                        </Col>
                        {
                          list.status !== 'pending' ?
                            <Col span={4}>
                              <div className={`collapse__status ` + (list.status === 'approved' ? 'c-green' : 'c-red')}>
                                <Icon type={ list.status === 'approved' ? 'check-circle-o' : 'close-circle-o' } />
                                <span>{list.status === 'approved' ? '通过' : '拒绝'}</span>
                              </div>
                              <Row>
                                <Col span={12}><strong className="c-gray">操作人: </strong></Col>
                                <Col span={12}><em>{list.handler}</em></Col>
                              </Row>
                              <Row>
                                <Col span={12}><strong className="c-gray">上次处理时间: </strong></Col>
                                <Col span={12}><em>{list.handleTime}</em></Col>
                              </Row>
                            </Col>
                            :
                            <Radio
                              checked={this.state.selectedList === index}
                              onChange={this.onSelectList.bind(this, index)} />
                        }
                      </Row>
                    )}>
                    <div className="collapse__panel">
                      {
                        list.status === 'rejected' && <Alert type="error" className="custom mb10" message={list.reason} />
                      }
                      <div className="table-like">
                        <Row>
                          <Col span={8}>
                            <strong>展期用电</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">单价</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">数量</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">金额</strong>
                          </Col>
                        </Row>
                        {list.usage.map((item, index) =>
                          <Row key={index}>
                            <Col span={8}>
                              <span>{item.type}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.amount}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit * item.amount}</span>
                            </Col>
                          </Row>
                        )}
                      </div>
                      <div className="table-like">
                        <Row>
                          <Col span={8}>
                            <strong>展期用电</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">单价</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">数量</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">金额</strong>
                          </Col>
                        </Row>
                        {list.temp.map((item, index) =>
                          <Row key={index}>
                            <Col span={8}>
                              <span>{item.type}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.amount}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit * item.amount}</span>
                            </Col>
                          </Row>
                        )}
                      </div>
                      <div className="table-like">
                        <Row>
                          <Col span={8}>
                            <strong>用水、气服务</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">单价</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">数量</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">金额</strong>
                          </Col>
                        </Row>
                        {list.waterAndGas.map((item, index) =>
                          <Row key={index}>
                            <Col span={8}>
                              <span>{item.type}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.amount}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit * item.amount}</span>
                            </Col>
                          </Row>
                        )}
                      </div>
                      <div className="table-like">
                        <Row>
                          <Col span={8}>
                            <strong>有线网络</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">单价</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">数量</strong>
                          </Col>
                          <Col span={4}>
                            <strong className="c-gray">金额</strong>
                          </Col>
                        </Row>
                        {list.network.map((item, index) =>
                          <Row key={index}>
                            <Col span={8}>
                              <span>{item.type}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.amount}</span>
                            </Col>
                            <Col span={4}>
                              <span>{item.unit * item.amount}</span>
                            </Col>
                          </Row>
                        )}
                      </div>
                    </div>
                  </Panel>
                )}
              </Collapse>
            </div>
          </Tabs.TabPane>

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

