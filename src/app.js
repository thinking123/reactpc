import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import AppBase, {
  $api, $store,
  ExwModalSelectExhibition,
  ExwModalBuildingBusinessesRefuse
} from 'components/scripts/index';

import Login from './login';
import Admin from './admin';
import Main from './main';

export default class extends AppBase {

  static initialState() {
    const hash = location.hash;
    const {currentList} = $store.session;
    const {login} = $store.local;
    return {
      local: {
        login: login || null
      },
      memory: {
        tabId: null,
        menuKey: null,
        title: null,
        params: {},
        footer: null,
        loginLoading: false,
        currentRow: {},
        currentIndex: 0,
        sidebarCollapsed: false,
        activeRoute: hash.slice(1),
        openKeys: null,
        activeState: null
      },
      session: {
        currentList: currentList || []
      },
      error: {},
      request: {}
    };
  }

  componentDidMount() {
    const {root} = this.refs;
    AppBase.$.memory = {
      history: root.history
    };
    //TODO: remove
    window.$ = AppBase.$;
  }

  command(inName, inData) {
    AppBase.$.memory = {
      [nx.camelize(inName)]: inData
    };
  }

  render() {
    return (
      <Router ref="root">
        <section className="route-wrapper">
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/main" component={Main}/>
          <section className="modal-container">
            {/*<MODAL_START />*/}
            <ExwModalSelectExhibition />
            <ExwModalBuildingBusinessesRefuse/>
            {/*<MODAL_END />*/}
          </section>
        </section>
      </Router>
    );
  }
}
