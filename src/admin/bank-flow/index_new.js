import React, { Component } from "react";
import AppBase, {$modal,  $route } from "components/scripts/index";
import Table from "components/mixins/table";
import Toolbar from "components/mixins/toolbar";
import {Divider} from 'antd';

let { Tabs, Tabs: { Tab }, Button, Search } = Toolbar;
let { ColumnData } = Table;

class TabData {
  key = "";
  text = "";
  value = 0;

  constructor(key, text){
    this.key = key;
    this.text = text;
  };
};

export default class extends Component {
  dataList = null;

  constructor(){
    super();

    this.dataList = [
      new TabData("refuse", "拒绝"),
      new TabData("nocommit", "未提交"),
      new TabData("waitconform", "待审核"),
      new TabData("conforming", "审核中"),
      new TabData("conformed", "确认收款")
    ];

    this.state = { table: null }
  };

  _openTicket(){
    $route.push("/admin/bank-flow/show/" );
    $modal.show('builders-refuse');
  }

  focusTab(tabIndex){
    let dataSource = [];

    for(var i = 0; i < 50;i++){
      dataSource.push({
        key: i,
        companyname: `汇款公司名称`,
        total: `30,000`,
        yajin: "10,000",
        service: "20,000",
        lasttime: "2018年1月23日",
      });
    }

    this.setState({
      table: (
        <Table
          columns={[
            new ColumnData("汇款公司", "companyname"),
            new ColumnData("汇款总额", "total"),
            new ColumnData("押金", "yajin"),
            new ColumnData("服务费", "service"),
            new ColumnData("上次处理时间", "lasttime"),
            {
              title: '',
              key: 'action',
              render: (text, record) => (
                <span>
                  {/*<a href={`#/admin/bank-flow/show/${record.key}`}>开发票</a>*/}
                  <a href="javascript:;" onClick={this._openTicket}>开发票</a>

                  <Divider type="vertical" />
                  <a href={`#/admin/bank-flow/show/${record.key}`}>修改</a>
                </span>

              ),
            }
          ]}

          dataSource={dataSource}

          onRow={(data) => {
            return {
              onClick: () => {
                $route.push("/admin/bank-flow/show/" + data.key);
              }
            };
          }}
        />
      )
    });
  };

  render() {
    let { dataList, state: { table } } = this;

    return (
      <div className="p20 notification-view">
        <Toolbar
          title={
            <Toolbar.Text className="b f24" text='银行汇款水单' />
          }
          button={
            <Toolbar.Button
              text="新增银行汇款水单"
              onClick={() => {
                $route.push("/admin/bank-flow/add");
              }}
            />
          }
          search={
            <Toolbar.Search onPressEnter={() => {
              console.log("search!!!!!")
            }} />
          }
        />

        <Toolbar
          title={
            <Tabs>
              {
                dataList.map((tabData, i) => {
                  return (
                    <Tab
                      key={i}
                      onFocus={() => {
                        this.focusTab(i);
                      }}
                    >
                      {`${tabData.text}(${tabData.value})`}
                    </Tab>
                  );
                })
              }
            </Tabs>
          }
        />
        {table}
      </div>
    )
  };
};
