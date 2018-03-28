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
          <div className="info-card-layout ">
            <div className="info-card-layout-img">
              <h3 className="tc f14 mb14  b card-text1">
                  <span>{title}</span>
              </h3>
              <h3 className="tc f32 mb14  b">
                <span>{count}</span>
              </h3>
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
