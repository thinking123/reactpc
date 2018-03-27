import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import AppBase, {
  $api, $store, ExwInfoCardItem, AntAbstractControllerIndex
} from 'components/scripts/index';

@mixin(['pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  childView() {
    return (
      <div className="p20 dashboard-view">
        <Row>
          <Col span="16">
              <Row gutter={20}>
              <Col span="8">
              <ExwInfoCardItem icon="file" count="12" title="我的报馆" apply/>
            </Col>
            <Col span="8">
              <ExwInfoCardItem icon="file" count="3" title="施工人员" apply/>
            </Col>
            <Col span="8">
              <ExwInfoCardItem icon="file" count="112" title="通知" apply/>
            </Col>
            </Row>
            <Row gutter={20}>
              <Col span="8">
              <ExwInfoCardItem icon="file" count="12" title="付款通知单" apply/>
            </Col>
            <Col span="8">
              <ExwInfoCardItem icon="file" count="3" title="汇款水单和发票" apply/>
            </Col>
            </Row>
          </Col>
          <Col span="8" className="pl20">
              <Row gutter={20}>
                  <Col span="24">
                    <ExwInfoCardItem icon="file" count="112" title="欢迎你,李华" apply/>
                  </Col>
               </Row>

                <Row gutter={20}>
                  <Col span="24">
                  <ExwInfoCardItem icon="file" count="112" title="违规记录" apply/>
                </Col>
                </Row>
          </Col>
        </Row>



        <h3 className="f16 b">申请展位最多的搭建商历史记录</h3>
      </div>
    )
  }
}
