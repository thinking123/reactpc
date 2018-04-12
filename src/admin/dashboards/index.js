import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import AppBase, {
  $api, $store,
  ExwInfoCardItem, ExwInfoCardItemWelcome,
  ExwInfoCardItemException, ExwDashboardMyExhibition,
  AntAbstractControllerIndex
} from 'components/scripts/index';

import card1 from 'images/card1.png';
import card2 from 'images/card2.png';
import card3 from 'images/card3.png';
import card4 from 'images/card4.png';
import card5 from 'images/card5.png';

@mixin(['pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  load() {

  }

  childView() {
    return (
      <div className="trbl0 abs p20 dashboard-view">
        <Row gutter={30}>
          <Col span="17">
            <Row gutter={20}>
              <Col span="8">
                <ExwInfoCardItem img={card1} count="12" agree="1" reject="2" title="我的报馆" apply/>
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card2} count="3" agree="1" reject="2" title="施工人员" apply/>
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card3} count="112" reject="2" title="通知" apply/>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span="8">
                <ExwInfoCardItem img={card4} count="12" agree="1" title="付款通知单" apply/>
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card5} count="3" title="汇款水单和发票" apply/>
              </Col>
            </Row>

            <ExwDashboardMyExhibition/>
          </Col>
          <Col span="7">
            <Row gutter={20}>
              <Col span="24">
                <ExwInfoCardItemWelcome username="李华" time="10:30 am"/>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span="24">
                <ExwInfoCardItemException icon="exception" score="112" count="3" title="违规记录"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
