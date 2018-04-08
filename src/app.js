import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import AppBase, {
  $api, $store,
  ExwModalBuildingBusinessesRefuse
} from 'components/scripts/index';

import Login from './login';
import Admin from './admin';
// import Main from './main';
import Register from './admin/register';
import RegisterStep1 from './admin/registers/step1';
import RegisterStep2 from './admin/registers/step2';
import NxDomEvent from 'next-dom-event';

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
    this.attachGlobalEvents();
  }

  componentWillUnmount() {
    this._hashRes.destroy();
  }

  command(inName, inData) {
    AppBase.$.memory = {
      [nx.camelize(inName)]: inData
    };
  }

  attachGlobalEvents() {
    this._hashRes = NxDomEvent.on(nx.GLOBAL, 'hashchange', () => {
      const hash = location.hash;
      AppBase.$.memory = {
        activeRoute: hash.slice(1)
      };
    })
  }

  render() {
    return (
      <Router ref="root">
        <section className="route-wrapper">
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/registers/step1" component={RegisterStep1}/>
          <Route path="/registers/step2" component={RegisterStep2}/>
          <section className="modal-container">
          {/*<MODAL_START />*/}
          <ExwModalBuildingBusinessesRefuse/>
          {/*<MODAL_END />*/}
          </section>
        </section>
      </Router>
    );
  }
}
