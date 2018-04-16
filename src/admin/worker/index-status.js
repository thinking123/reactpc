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
        title: '施工人员（个）'
      }, {
        key: 'name',
        dataIndex: 'name',
        title: '保险单(个)'
      }, {
        key: 'data',
        dataIndex: 'data',
        title: '上次修改时间'
      },   {
      title: '',
        key: 'action',
        render: (text, record) => (
        <span>
                  <a href={`#/admin/worker/show/${record.key}`}>查看</a>
                </span>
      ),
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
        key:1,
        name: '10',
        data: '昨天',
      },
      {
        id: 2,
        key:2,
        name: '10',
        data: '3天前',
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
    $route.push(`/admin/worker/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }
}

