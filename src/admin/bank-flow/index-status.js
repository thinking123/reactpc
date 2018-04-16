import  AppBase, {
  $api, $route,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Row, Col, Menu, Icon, Table, Button, Input,  Divider} from 'antd';

@mixin(['active-state', 'match', 'pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  get fields() {
    return [
      {
        key: 'remittance_company',
        dataIndex: 'remittance_company',
        title: '汇款公司'
      }, {
        key: 'remittance_company_bank_account',
        dataIndex: 'remittance_company_bank_account',
        title: '汇款公司账号'
      }, {
        key: 'remittance_amount',
        dataIndex: 'remittance_amount',
        title: '汇款总额'
      }, {
        key: 'deposit_amount',
        dataIndex: 'deposit_amount',
        title: '押金'
      }, {
        key: 'invoice_amount',
        dataIndex: 'invoice_amount',
        title: '开票金额'
      },
      {
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={this._openTicket}>开发票</a>
                  <Divider type="vertical" />
                  <a href={`#/admin/bank-flow/show/${record.invoice_id}`}>修改</a>
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
    $api.invoice_remittance_receipt_index({user_id: 123123,status:status}).then(resp=>{
      AppBase.$.memory = {
        invoiceRemittanceReceiptList: resp.data
      };
      this.setState({data: resp.data, total: resp.data.length});
    })
  }

  componentWillUnmount() {
    this.unWatchParams();
  }

  onRowClick = inRecord => {
    $route.push(`/admin/bank-flow/show/${inRecord.id}`)
  };

  pureLayout() {
    return this.tableView();
  }

  _openTicket(){
    $route.push("/admin/bank-flow/show/" );
    $modal.show('builders-refuse');
  }
}

