import {Row, Col, Menu, Icon, Table, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';


export default class extends React.PureComponent {
  render() {
    return (
      <div className="p20 notification-show">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left" />
            <span>返回</span>
          </a>
        </h3>
        <h2 className="f20 mb20 b">通知详情</h2>

        <section className="db_ mb5_ lh-25">
          <label className="item">
            <strong className="dib wp-2">标题</strong>
            <span>标题</span>
          </label>
          <label className="item">
            <strong className="dib wp-2">时间</strong>
            <span>2017年12月20日</span>
          </label>
          <label className="item">
            <strong className="dib wp-2">内容</strong>
            <span>内容</span>
          </label>
          <label className="item">
            <strong  className="dib wp-2">&nbsp;</strong>
            <img src="http://placeholder.qiniudn.com/400x300" alt=""/>
          </label>
        </section>
      </div>
    );
  }
}

