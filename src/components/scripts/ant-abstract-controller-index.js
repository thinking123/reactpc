import AppBase, {$api, $app, $date, $store} from 'components/scripts/index';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';

export default class extends React.Component {

  apiKey = 'user_index';
  size = 'middle';
  rowKey = 'id';
  pagination = {
    current: 'pageNum',
    rows: 'rows',
    total: 'total'
  };

  get defaults() {
    return {
      [this.pagination.current]: 1
    };
  }

  set request(inValue) {
    this._request = inValue;
  }

  get request() {
    return this._request || this.defaults;
  }

  get rowSelection() {
    return null;
  }

  get fields() {
    return [];
  }

  get actions() {
    return null;
  }

  get columns() {
    return this.actions ? this.fields.concat(this.actions) : this.fields
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: this.columns,
      data: [],
      selectedRowKeys: [],
      [this.pagination.current]: 1,
      [this.pagination.total]: 0
    };

    this.$config = require('./_config').default(this);
  }

  componentDidMount() {
    this.load(this.request);
    AppBase.$.memory = {
      footer: this.footerView(),
    };
  }

  componentWillUnmount() {
    AppBase.$.memory = {
      footerView: null
    };
  }

  footerView() {
    return null;
  }

  load(inData) {
    $api[this.apiKey](inData).then(({data, filter, total}) => {
      this.setState({data, total});
      AppBase.$.session = {currentList: data};
    });
  }

  refresh() {
    const {current} = this.pagination;
    this.load({
      [current]: this.state[current]
    });
  }


  tableView() {
    const {columns, data, selectedRowKeys}  = this.state;
    const {total, current} = this.pagination;
    return (
      <Table
        size={this.size}
        rowSelection={this.rowSelection}
        bordered
        selectedRowKeys={selectedRowKeys}
        columns={columns}
        dataSource={data}
        rowKey={this.rowKey}
        onRow={this._onRow}
        pagination={{
          total: this.state[total],
          current: this.state[current],
          onChange: this._onChange
        }}/>
    )
  }

  onRowClick() {
  }

  _onRow = inRecord => {
    return {
      onClick: () => {
        this.onRowClick(inRecord);
      }
    }
  };

  _onChange = (inCurrentPage) => {
    const pagination = {[this.pagination.current]: inCurrentPage};
    AppBase.$.session = pagination;
    this.load(pagination);
  };

  render() {
    return this.layout ? this[`${this.layout}Layout`]() : null;
  }
}
