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
        key: 'exhibition',
        dataIndex: 'exhibition',
        title: '参展商'
      }, {
        key: 'status_reason',
        dataIndex: 'status_reason',
        title: '拒绝材料'
      },
      {
        key: 'updated_at',
        dataIndex: 'updated_at',
        title: '上次处理时间'
      } ,{
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
                  <a href={`#/admin/my-exhibition/show/${record.key}`}>查看</a>
                </span>
        )
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
      const {params} = AppBase.$.memory;
      let status;
      let st = "1";
      if(params && params.state){
        st = params.state;
      }
      switch (st) {
        case '1':
          status = "rejected";
          break;
        case '2':
          status = "uncommitted";
          break;
          case '3':
            status = "pending";
        break;
        case '4':
          status = "under_review";
          break;
        case '5':
          status = "passed";
          break;
        default:
          status = "rejected";
      }

       this.fetchData(status);
  }


  fetchData(status){
    $api.myexhibition_index({user_id: 123123,status:status}).then(resp=>{
      AppBase.$.memory = {
        myexhibitionList: resp.data
      };
      this.setState({data: resp.data, total: resp.data.length});
    })
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

