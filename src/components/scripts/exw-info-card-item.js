import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, img, title, count, apply, ...props} = this.props;
    return (
      <div data-depth="2" data-hover="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item", className) } {...props}>
        {/*<row  >*/}
          {/*<Col className=" webkit-sassui-transform-center-xy " span="12">*/}
            {/*<img   src={img}/>*/}
          {/*</Col>*/}
          {/*<Col   span="12">*/}
            {/*<img    src={img}/>*/}
          {/*</Col>*/}

        {/*</row>*/}

          <div className="info-card-layout">
            <div  className="info-card-layout-img">
              <img src={img}/>
            </div>

          </div>
          <div className="info-card-layout-right">
            <div className="info-card-layout-text">
              <div className="mb7  b">
                  <span className="card-text1">{title}</span>
              </div>
              <div className="mb7  b">
                  <span className="card-text2">{count}</span>
                {apply && <em className="abs c-red wp-10">未读</em>}
              </div>
              <div className="mb7  b">
                <span className="card-text3">{count} 通过 </span>
                <span className="card-text4">{count} 拒绝 </span>
              </div>
              {/*<p className="rel">*/}
                  {/*<span className="f48 b">{count}</span>*/}
              {/*{apply && <em className="abs c-red wp-10">待审</em>}*/}
            </div>
          </div>


          {/*<h3 className="tc f14 mb14 c-9 b webkit-sassui-icon-text">*/}
            {/*<Icon type={icon}/>*/}

            {/*<span className="ml5">{title}</span>*/}
          {/*</h3>*/}
          {/*<p className="rel">*/}
            {/*<span className="f48 b">{count}</span>*/}
            {/*{apply && <em className="abs c-red wp-10">待审</em>}*/}
          {/*</p>*/}

      </div>
    )
  }
}
