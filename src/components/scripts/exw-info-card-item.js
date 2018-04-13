import React, {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {

  render() {
    const {className, img, title, count, agree, reject,apply, ...props} = this.props;
    return (
      <div data-depth="2" data-hoverable="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exw-info-card-item", className) } {...props}>
          <section className="wp-8 webkit-sassui-transform-center-xy bd">
            <div className="info-card-layout">
              <img className="info-card-layout-img" src={img}/>
            </div>
            <div className="info-card-layout-right">
              <div className="info-card-layout-text">
                <div className="mb8 b">
                  <span className="card-text1">{title}</span>
                </div>
                <div className="mb8 b">
                  <span className="card-text2">{count}</span>
                  {apply && <em className="ml5 abs c-red wp-10">未读</em>}
                </div>
                <div className="mb8 mt5_ mr__ b">
                  {agree > -1 && <span className="card-text3">{agree} 通过 </span>}
                  {reject > -1  && <span className="card-text4">{reject} 拒绝 </span>}
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }
}
