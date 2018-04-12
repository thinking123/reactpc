import React, { Component } from "react";
import AppBase from "components/scripts/index";
import Details from "components/mixins/details";
import { $route } from "components/scripts/index";
import { Button, Icon } from "antd";

let { Title, Divider, Merger, Info, SelectorInfo, InputInfo, Tools } = Details;

export default class extends Component {
  constructor(){
    let id = AppBase.$.memory.params.id;

    super();

    this.state = {
      index: 0,
      customer: "参展商",
      builder: "搭建商",
      score: 99,
      list: [{
        title: "违规情况",
        score: 99,
        desc: "违规情况",
        operator: "Micheal Lee",
        time: "昨天",
        pictures: [
          "http://www.baidu.com/img/bd_logo1.png"
        ]
      }]
    };
  };

  render(){
    let { index, customer, builder, score, list } = this.state;

    return (
      <Details className="illegal-records-details">
        <h3 className="mb10">
          <a href="javascript:;" onClick={$route.back}>
            <Icon type="left" />
            <span>返回列表</span>
          </a>
        </h3>
        <h2 className="f20 mb20 b">违规记录详情</h2>

        <Title text="展位信息" />
        <Info text="展位">{index}</Info>
        <Merger>
          <Info text="参展商" compact>{customer}</Info>
          <Info text="搭建商" compact>{builder}</Info>
        </Merger>
        <br />
        <Title text="违规情况" />
        <Info text="合计扣分">{score}</Info>
        <Divider />
        {
          list.map((data, i) => {
            let { title, score, desc, operator, time, pictures } = data;

            return (
              <div key={i}>
                <Info text="违规情况">{title}</Info>
                <Info text="违规分值">{score}</Info>
                <Info text="操作人">{operator}</Info>
                <Info text="操作时间">{time}</Info>
                <Info text="违规图片">
                  {
                    pictures.map((pic, i) => {
                      return <p key={i} className="picture" style={{backgroundImage: `url(${pic})`}} ></p>;
                    })
                  }
                </Info>
                <Divider />
              </div>
            );
          })
        }
        {/*<Tools>*/}
          {/*<Button size="large" onClick={()=> {*/}
            {/*$route.back();*/}
          {/*}}>*/}
            {/*<Icon type="left" />*/}
            {/*返回*/}
          {/*</Button>*/}
          {/*<Button*/}
            {/*size="large"*/}
            {/*type="primary"*/}
            {/*onClick={() => {*/}
              {/*$route.push("/admin/illegal-records/edit");*/}
            {/*}}*/}
          {/*>*/}
            {/*修改*/}
          {/*</Button>*/}
        {/*</Tools>*/}
      </Details>
    )
  };
};
