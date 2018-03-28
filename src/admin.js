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
  ExwSideMenu,
  ExwHeader,
  ExwPageException,
  ExwSloganSwitch
} from 'components/scripts/index';


export default class extends React.Component {

  render() {
    const {sidebarCollapsed, footer, tabId} = AppBase.$.memory;
    return (
      <Layout className="admin-view">
        <Header>
          <ExwHeader/>
        </Header>
        <Layout>
          <Sider
               width="200">
               <ExwSideMenu />
          </Sider>
               <Content className="rel">
                 <Switch>
                   { ReactDynamicRouter.build(Route, $config.ROUTES) }
                   <Route component={ExwPageException}/>
                 </Switch>
               </Content>
        </Layout>
      </Layout>
    );
  }
}
