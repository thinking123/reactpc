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
        key: 'booth_num',
        dataIndex: 'booth_num',
        title: '展位'
      }, {
        key: 'customer_name',
        dataIndex: 'customer_name',
        title: '参展商'
      }, {
        key: 'status_reason',
        dataIndex: 'status_reason',
        title: '拒绝材料'
      },
      {
        key: 'updated_time',
        dataIndex: 'updated_time',
        title: '上次处理时间'
      } ,{
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
                  <a href={`#/admin/my-exhibition/show/${record.key}`}>查看</a>
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
        booth_num: '展位号2',
        customer_name: '参展商2',
        status_reason: '搭建委托书，展商保证书等2项',
        updated_time: '今天'
      },
      {
        booth_num: '展位号2',
        customer_name: '参展商2',
        status_reason: '搭建委托书，展商保证书等2项',
        updated_time: '今天'
      }
    ];

    setTimeout(() => {
       this.setState({data, total: 2});
      //const {myexhibitionList} = AppBase.$.memory;
      //this.setState({myexhibitionList, total: myexhibitionList.length});
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

