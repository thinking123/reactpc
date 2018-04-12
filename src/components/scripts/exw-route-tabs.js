import React, {Component} from 'react';
import classNames from 'classnames';
import {
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import AppBase, {
  $api, $store, $app, $config
} from 'components/scripts/index';
import {Table, Icon, Card, Input, Button, Tabs} from 'antd';

export default class extends Component {

  static defaultProps = {
    route: {
      path: '/admin/my-exhibition/index/:state',
      component: require('admin/my-exhibition/index-status').default
    },
    header: [
      {
        state: '1',
        component: <span>我的账户</span>
      },
      {
        state: '2',
        component: <span>我的权限</span>
      }
    ],
    extra: (
      <div className="lfix_ ml10_ ml__ extra">
        <Button type="primary">ADD</Button>
        <Input.Search placeholder="Search.." enterButton style={{width: 220}}/>
      </div>
    )
  };

  _onClick = inItem => {
    AppBase.$.memory = {
      activeState: inItem.state,
      activeRoute: `/admin/my-exhibition/index/${inItem.state}`
    };
  };

  render() {
    const {className, extra, route, header, match, topView, ...props} = this.props;
    const matchUrl = match.url;
    return (
      <div className={classNames("abs trbl0 webkit-sassui-flex-fixed-bdauto exw-route-tabs", className)}>
        { topView }
        <nav className="rel mb14 lrfix_ hd">
          <ul className="left">
            {
              header.map((item) => {
                return (
                  <li onClick={this._onClick.bind(this, item)} key={item.state}>
                    <NavLink activeClassName='active' to={`${matchUrl}/${item.state}`}>{item.component}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <aside className="r0 mr14 webkit-sassui-transform-center-y right">
            {extra}
          </aside>
        </nav>

        <section className="rel bd ovs-y">
          <Route {...route}/>
        </section>

      </div>
    )
  }
}
