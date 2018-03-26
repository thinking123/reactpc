import {Layout, Menu, Icon, Badge} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ReactDynamicRouter from 'react-dynamic-router';

import AppBase, {
  $api, $app, $config,
  ExwLogo,
  ExwSideMenu,
  ExwHeader,
  ExwPageException,
  ExwSloganSwitch
} from 'components/scripts/index';


export default class extends React.Component {

  render() {
    const {sidebarCollapsed, footer} = AppBase.$.memory;
    return (
      <Layout className="admin-view">
        <Sider
          breakpoint="lg"
          width="250"
          trigger={null}
          collapsible
          collapsedWidth={148}
          collapsed={sidebarCollapsed}>
          <ExwSloganSwitch />
          <ExwSideMenu />
        </Sider>
        <Layout>
          <ExwHeader/>
          <Content className="rel">
            <Switch>
              { ReactDynamicRouter.build(Route, $config.ROUTES) }
              <Route component={ExwPageException}/>
            </Switch>
          </Content>
          {
            footer && (
              <Footer className="clearfix footer-view">
                { footer }
              </Footer>
            )
          }
        </Layout>
      </Layout>
    );
  }
}
