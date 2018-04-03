//import ReactFullImage from 'react-full-image';
//import bgImg from 'images/bg.jpg';
import  AppBase, {$api, $app, ExwEntryItem} from 'components/scripts/index';

export default class extends React.Component {

  _toUrl = e => {
    const menuKey = e;
    const activeRoute = menuKey === 'apply-finance' ? '/admin/dashboards/index' : '/admin/exhibitors/index';
    AppBase.$.session = {menuKey};
    AppBase.$.memory = {activeRoute};
    $app.successPush(`你选择了${e}`, activeRoute);
  };

  render() {
    return (
      <div className="main-view">
        {/*<div className="webkit-sassui-overlay z1" data-position="fixed" data-color="black"/>*/}
        {/*<div className="webkit-sassui-transform-center-xy z3 t375 body wp-10 tc">*/}
          {/*<header className="c-f b mb50" style={{fontSize: '30px'}}>请选择您想进入的系统</header>*/}
          {/*<section className="tc">*/}
            {/*<ExwEntryItem icon="credit-card" title="审核+财务" onClick={this._toUrl.bind(this, 'apply-finance')}>*/}
              {/*<p>搭建商审核，报馆材料审核，施工人员审核，</p>*/}
              {/*<p>付款通知单管理，汇款水单管理，发票管理，</p>*/}
              {/*<p>通知管理，违规记录等</p>*/}
            {/*</ExwEntryItem>*/}
            {/*<ExwEntryItem icon="setting" title="展会配置" onClick={this._toUrl.bind(this, 'setting')}>*/}
              {/*<p>参展商管理， 展会工作人员管理，</p>*/}
              {/*<p>搭建商管理，展会信息配置等</p>*/}
            {/*</ExwEntryItem>*/}
          {/*</section>*/}
        {/*</div>*/}
        {/*<ReactFullImage src={bgImg}/>*/}
      </div>
    );
  }
}

