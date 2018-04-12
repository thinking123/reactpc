import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

let AntdFooter = Layout.Footer;

export class DataTable extends Component {
	render() {
    var { dataSet } = this.props;
    console.log(this.props);
		return (
			<Row type="flex" justify="end">
				{dataSet.map((col, index) => 
					<Col span={3} key={index}>
            <div className="footer-grid">
              <strong className="footer-grid__header">{col.title}</strong>
              <span className="footer-grid__text">{col.value}</span>
            </div>
					</Col>
				)}
			</Row>
		)
	}
};

export default class extends Component {
	static DataTable = DataTable;

	render(){
    console.log(this.props);
		var { dataTable } = this.props;
		return (
			<Layout className="footbar-component">
				<AntdFooter>
          {dataTable}
        </AntdFooter>
			</Layout>
		)
	};
};