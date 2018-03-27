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
        title: '搭建商'
      },
      {
        key: 'time',
        dataIndex: 'time',
        title: '提交时间'
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
        id: 1,
        name: '参展商1',
        data: '搭建商1',
        time: '2018-03-21'
      },
      {
        id: 2,
        name: '参展商2',
        data: '搭建商2',
        time: '2018-03-25'
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
    $route.push(`/admin/building-businesses/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }
}

