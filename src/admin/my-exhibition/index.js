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
        target: `展位号${i}`,
        canzhuangshang: `参展商${i} - ${this.dataList[tabIndex].key}`,
        refuse: "搭建委托书，展商保证书等2项",
        lasttime: "昨天"
      });
    }

    this.setState({
      table: (
        <Table
          columns={[
            new ColumnData("展位", "target"),
            new ColumnData("参展商", "canzhuangshang"),
            new ColumnData("拒绝材料", "refuse"),
            new ColumnData("上次处理时间", "lasttime"),
            {
              title: '',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a href="/admin/my-exhibition/show/undefined">查看</a>
                </span>
              ),
            }
          ]}

          dataSource={dataSource}

          onRow={(data) => {
            return {
              onClick: () => {
                $route.push("/admin/my-exhibition/show/" + data.id);
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
            <Toolbar.Text className="b f24" text='我的报馆' />
          }
          button={
            <Toolbar.Button
              text="新增报馆"
              onClick={() => {
                $route.push("/admin/my-exhibition/add-step1");
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
