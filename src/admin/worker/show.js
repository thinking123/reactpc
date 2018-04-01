// import  AppBase, {
//   $api, $route, $modal,ExwDashboardMyExhibition,
//   AntAbstractControllerIndex
// } from 'components/scripts/index';
//
// import {Row, Col, Tag, Icon} from 'antd';
// import ReactSmartPhoto from 'react-smart-photo';
//
// @mixin(['pure-layout', 'match'])
// export default class extends React.Component {
//
//   layout = 'pure';
//
//   _onClick = inStatus => {
//     switch (inStatus) {
//       case 'back':
//         $route.back();
//         break;
//       case 'refuse':
//         $modal.show('building-businesses-refuse');
//         break;
//       default:
//         AppBase.notify(`You Click status: => ${inStatus}`);
//     }
//   };
//
//   footerView() {
//     return (
//       <div className="lrfix_">
//         <label className="left" style={{lineHeight: '34px'}}>
//           <span>搭建商类别：</span>
//           <select>
//             <option value="1">搭建商1</option>
//             <option value="2">搭建商2</option>
//           </select>
//         </label>
//         <div className="right">
//           <Tag color="#38a0f5" onClick={this._onClick.bind(this, 'back')}>
//             <Icon type="left"/>
//             <span>返回</span>
//           </Tag>
//           <Tag color="#F34D45" onClick={this._onClick.bind(this, 'refuse')}>拒绝</Tag>
//           <Tag color="#46A96A" onClick={this._onClick.bind(this, 'pass')}>通过</Tag>
//         </div>
//       </div>
//     );
//   }
//
//   childView() {
//     return (
//       <div className="abs trbl0 p20 bg-f my-exhibition-show-view">
//         <h3 className="mb10">
//           <a href="javascript:;" onClick={$route.back}>
//             <Icon type="left" />
//             <span>返回列表</span>
//           </a>
//         </h3>
//         <h2 className="f20 mb20 b">施工人员详情</h2>
//         <h3 className="sub-title">
//           <span className="b f14">有部分施工人员申请被拒绝，请修改并重新提交</span>
//         </h3>
//
//         <ExwDashboardMyExhibition/>
//       </div>
//     );
//   }
//
//   componentDidMount() {
//     AppBase.$.memory = {
//       footer: this.footerView()
//     };
//   }
//
//   render() {
//     return this.pureLayout();
//   }
// }
//


import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Table, Button, Input} from 'antd';
import AppBase, {
  $api, $store, $route,
} from 'components/scripts/index';

export default class extends Component {
  state = {
    endTime:'2018年3月26日18:00',
    data: [
      {
        id: '1',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '2',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '3',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      },
      {
        id: '4',
        username: '施工人',
        idcardnumber: '参展商',
        saomiaojian:'扫描件',
        yicunzhaopian:'一寸照片',
      }

    ],
    columns: [
      {
        title: '姓名',
        key: 'username',
        dataIndex: 'username'
      },
      {
        title: '身份证号',
        key: 'idcardnumber',
        dataIndex: 'idcardnumber'
      },
      {
        title: '身份证扫描件',
        key: 'saomiaojian',
        dataIndex: 'saomiaojian'
      },
      {
        title: '一寸照片',
        key: 'yicunzhaopian',
        dataIndex: 'yicunzhaopian'
      },
      {
        title: '',
        key: 'action',
        render: () => {
          return (
            <div className="actions">
              <Button size="small" onClick={$route.push.bind(null, '/')}>查看</Button>
            </div>
          )
        }
      }
    ]
  };

  render() {
    const {endTime,columns, data} = this.state;
    return (
      <div className="p20 my-exhibition-view bg-f">
        <h3 className="mb10">
                     <a href="javascript:;" onClick={$route.back}>
                       <Icon type="left" />
                       <span>返回列表</span>
                     </a>
                   </h3>
        <header>
          <span className="b f18">施工人员详情</span>
        </header>
        <header className="sub-title">
          <span className="b f14">有部分施工人员申请被拒绝，请修改并重新提交</span>
        </header>
        <Table bordered rowKey={'id'} columns={columns} dataSource={data} size="middle"/>
      </div>
    )
  }
}
