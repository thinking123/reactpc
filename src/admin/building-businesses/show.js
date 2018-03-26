import  AppBase, {
  $api,
  AntAbstractControllerIndex
} from 'components/scripts/index';

@mixin(['active-state', 'match', 'pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  get fields() {
    return [
      {
        key: 'id',
        dataIndex: 'id',
        title: 'id'
      }, {
        key: 'name',
        dataIndex: 'name',
        title: 'name'
      }, {
        key: 'data',
        dataIndex: 'data',
        title: 'data'
      }
    ]
  }

  componentDidMount() {
    this.syncActiveState();
    this.syncParams();
    this.watchParams();
  }

  componentWillUnmount() {
    this.unWatchParams();
  }

  pureLayout() {
    return this.tableView();
  }
}

