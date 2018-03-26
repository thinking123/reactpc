import AppBase, {
  $api
} from 'components/scripts/index';
import NxDomEvent from 'next-dom-event';

export default class {

  get params() {
    const {match} = this.props;
    return match.params;
  }

  watchParams() {
    this._hashRes = NxDomEvent.on(nx.GLOBAL, 'hashchange', () => {
      this.syncParams();
    });
  }

  syncParams() {
    const {match} = this.props;
    AppBase.$.memory = {
      params: match.params
    };
  }

  unWatchParams() {
    this._hashRes.destroy();
  }
}
