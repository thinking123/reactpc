import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import AppBase, {
  $api, $store, $date,
  ExwModalAddCost
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
        activeState: null,
        dashboardInfo:{}, //首页信息
        myexhibitionList:[],//我的报馆列表信息
        constructorList:[],//施工人员列表信息
        paymentNoticeList:[],//付款通知列表信息
        profileDetail:{},//个人和公司详情
        invoiceRemittanceReceiptList:[],//银行汇款水单列表
        noticeList:[],//通知列表
        illegalRecordList:[],//违规记录列表
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
    this.checkLogin();
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

  checkLogin() {
    const {login} = AppBase.$.local;
    if (login) {
      const now = +$date.create();
      const expired = +$date.create(login.expired);
      if (now > expired) {
        //this.logout();
        AppBase.$.local = {login: null};
      }
    }
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
            <ExwModalAddCost/>
            {/*<MODAL_END />*/}
          </section>
        </section>
      </Router>
    );
  }
}
