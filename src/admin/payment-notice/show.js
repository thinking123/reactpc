import  AppBase, {
  $api, $route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Tag, Tabs, Input} from 'antd';
import ReactSmartPhoto from 'react-smart-photo';
import ReactStatusManager from 'react-status-manager';

@mixin(['pure-layout', 'match'])
export default class extends AntAbstractControllerIndex {

  layout = 'pure';
  scrollable = false;

  childView() {
    return (
      <div className="abs trbl0 builder-show-view">
        <div className="abs l0 t0 b0 p20 left wp-6 webkit-sassui-flex-fixed-bdauto" data-scroll='true'>
          <header className="lh-40">
            <h1 className="b f20">保险单</h1>
          </header>
          <div className="bd">
            <img className="wp-10" src="http://placeholder.qiniudn.com/80x280" alt=""/>
          </div>
        </div>
        <div className="abs r0 t0 b0 py10 left wp-4 webkit-sassui-flex-fixed-bdauto" data-scroll='true'>
          <header className="mb10_ mb__">
            <Input.Search placeholder="Search.." enterButton style={{ width:'calc(100% - 10px)'}} />
            <p>当前已审核: 1/10</p>
            <p>
              <span className="dib wp-3">姓名:</span>
              <em>施工人员</em>
            </p>
            <p>
              <span className="dib wp-3">身份证号:</span>
              <em>231453748596037285</em>
            </p>
          </header>
          <div className="mb20_ bd">
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>

            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>
            <p>
              <img className="wp-10" src="http://placeholder.qiniudn.com/340x180" alt=""/>
            </p>


          </div>
        </div>
      </div>
    );
  }
}

