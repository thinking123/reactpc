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
        title: '搭建商'
      }, {
        key: 'name',
        dataIndex: 'name',
        title: '施工人员(个)'
      }, {
        key: 'data',
        dataIndex: 'data',
        title: '保险单(个)'
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
        name: '10',
        data: '2',
        time: '2018-03-21'
      },
      {
        id: 2,
        name: '11',
        data: '23',
        time: '2018-03-25'
      }
    ];

    setTimeout(() => {
      this.setState({data, total: 2});
    }, 10);
  }

  componentWillUnmount() {
    this.unWatchParams();
  }

  onRowClick = inRecord => {
    $route.push(`/admin/builders/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }
}

