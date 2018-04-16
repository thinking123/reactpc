import React, { Component } from 'react';
import { Input, InputNumber, Row, Col, Icon, Divider as AntdDivider } from 'antd';

export class Search extends Component {
	render() {
    var { placeholder, onPressEnter, className } = this.props;

		return (
      <Input
				className={`edit-sidebar__search ${className}`}
				placeholder={placeholder}
				onPressEnter={onPressEnter}
				prefix={<Icon type="search" />}
			/>
		)
	}
};

export class Divider extends Component {
	render() {
		return (
			<AntdDivider className="edit-sidebar__divider" />
		);
	};
};

export class Title extends Component {
  render() {
    var { text, className } = this.props;

    return (
      <h4 className={`edit-sidebar__title ${className}`}>{text}</h4>
    )
  }
}

export class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editting: false,
      value: props.value
    };
    this.value = props.value;
  }

  _onSave() {
    console.log('save!');
    var { value } = this.state;
    this.value = value;
    this.setState({ editting: false });
  }

  _onCancel() {
    console.log('cancel!');
    this.setState({ editting: false, value: this.value });
  }

  render() {
    var { label, className, editable, children, spans } = this.props;
    var { value } = this.state;
    let { text: textSpan, content: contentSpan } = spans || {};

    if (editable) {
      return (
        <Row className={`edit-sidebar__item ${className}`}>
          <Col className="edit-sidebar__item__label" span={textSpan || 12}>{label}</Col>
          {
            this.state.editting ?
            <Col span={contentSpan || 12}>
              <InputNumber
                size="small"
                style={{width: '60px'}}
                min={0}
                value={value}
                onChange={(v) => {
                  this.setState({ value: v });
                }}
              /> 
              <span className="edit-sidebar__item__button" onClick={this._onCancel.bind(this)}>取消</span>
              <span className="edit-sidebar__item__button" onClick={this._onSave.bind(this)}>保存</span>
            </Col>
            :
            <Col span={contentSpan || 12}>
              {value}
              <span className="edit-sidebar__item__button" onClick={() => {
                this.setState({ editting: true })
              }}>修改</span>
            </Col>
          }
        </Row>
      )
    } else {
      return (
        <Row className={`edit-sidebar__item ${className}`}>
          <Col className="edit-sidebar__item__label" span={textSpan || 12}>{label}</Col>
          <Col span={contentSpan || 12}>{value}</Col>
        </Row>
      )
    }
  }
}

export class Image extends Component {
  render() {
    let { caption, src, className = '', children } = this.props;
    // let { width, height }
    return (
      <div className={`edit-sidebar__image ${className}`}>
        <figure>
          <img src={src} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    )
  }
}

export class Footbar extends Component {
  render() {
    let { children, className = '' } = this.props;
    return (
      <div className={`edit-sidebar__footbar ${className}`}>
        {children}
      </div>
    )
  }
};

export default class extends Component {
  static Search = Search;
  static Title = Title;
  static Item = Item;
  static Image = Image;
  static Divider = Divider;
  static Footbar = Footbar;

	render(){
		var { children, className = '' } = this.props;
		return (
			<div className={`edit-sidebar ${className}`}>{children}</div>
		);
	};
};