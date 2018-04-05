import  AppBase, {
  $api, $route,
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
        title: '展位'
      }, {
        key: 'name',
        dataIndex: 'name',
        title: '参展商'
      }, {
        key: 'data',
        dataIndex: 'data',
        title: '拒绝材料'
      },
      {
        key: 'time',
        dataIndex: 'time',
        title: '上次处理时间'
      }
    ]
  }

  componentDidMount() {
    super.componentDidMount();
    this.syncActiveState();
    this.syncParams();
    this.watchParams();
  }

  load() {
    //TODO: will be removed
    const data = [
      {
        id: '展位号',
        name: '参展商1',
        data: '搭建委托书，展商保证书等2项',
        time: '昨天'
      },
      {
        id: '展位号2',
        name: '参展商2',
        data: '搭建委托书，展商保证书等2项',
        time: '今天'
      }
    ];

    setTimeout(() => {
      this.setState({data, total: 2});
    }, 100);
  }

  componentWillUnmount() {
    this.unWatchParams();
  }

  onRowClick = inRecord => {
    $route.push(`/admin/my-exhibition/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }
}

