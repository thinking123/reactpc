import React, { Component } from "react";
import AppBase, { $route } from "components/scripts/index";
import Table from "components/mixins/table";
import Toolbar from "components/mixins/toolbar";


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
      new TabData("ok", "通过")
    ];

    this.state = { table: null }
  };

  focusTab(tabIndex){
    let dataSource = [];

    for(var i = 0; i < 50;i++){
      dataSource.push({
        key: i,
        workernumber: `${i}`,
        number: `${i} - ${this.dataList[tabIndex].key}`,
        lasttime: "昨天"
      });
    }

    this.setState({
      table: (
        <Table
          columns={[
            new ColumnData("施工人员(个)", "workernumber"),
            new ColumnData("保险单(个)", "number"),
            new ColumnData("上次修改时间", "lasttime"),
            {
              title: '',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a href="/admin/worker/show/undefined">查看</a>
                </span>
              ),
            }
          ]}

          dataSource={dataSource}

          onRow={(data) => {
            return {
              onClick: () => {
                $route.push("/admin/worker/show/" + data.id);
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
            <Toolbar.Text className="b f24" text='施工人员' />
          }
          button={
            <Toolbar.Button
              text="添加施工人员"
              onClick={() => {
                $route.push("/admin/worker/add");
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
