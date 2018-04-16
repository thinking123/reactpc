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
    const {dashboardInfo} = AppBase.$.memory;

    return (
      <div className="trbl0 abs p20 dashboard-view">
        <Row gutter={30}>
          <Col span="17">
            <Row gutter={20}>
              <Col span="8">
                <ExwInfoCardItem img={card1} count={dashboardInfo.booth_count} agree={dashboardInfo.booth_passed} reject={dashboardInfo.booth_rejected} title="我的报馆" />
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card2} count={dashboardInfo.constructor_count} agree={dashboardInfo.constructor_passed} reject={dashboardInfo.constructor_rejected} title="施工人员" />
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card3} count={dashboardInfo.unread_notification}  title="通知" apply/>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span="8">
                <ExwInfoCardItem img={card4} count={dashboardInfo.bill_notificatioin}  title="付款通知单"/>
              </Col>
              <Col span="8">
                <ExwInfoCardItem img={card5} count="9999" agree={dashboardInfo.bill_and_invoice_passed} reject={dashboardInfo.bill_and_invoice_passed} title="汇款水单和发票"/>
              </Col>
            </Row>

            <ExwDashboardMyExhibition/>
          </Col>
          <Col span="7">
            <Row gutter={20}>
              <Col span="24">
                <ExwInfoCardItemWelcome username={dashboardInfo.user_name} time={dashboardInfo.last_login_time}/>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span="24">
                <ExwInfoCardItemException icon="exception" score={dashboardInfo.violation_total_points} count={dashboardInfo.violation_total_counts} title="违规记录"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

  componentDidMount() {
    $api.dashboard_index({user_id: 123123}).then(resp=>{
      AppBase.$.memory = {
        dashboardInfo: resp.data
      }
    })
  }
}
