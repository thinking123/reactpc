import React, { Component } from "react";
import { Divider as AntDivider, Row, Col, Select, Input, Button, Upload } from "antd";

let { Option } = Select;
let { Dragger } = Upload;
let { TextArea } = Input;

export class Title extends Component {
	render(){
		let { text } = this.props;

		return (
			<div className="details-component-title">{text}</div>
		);
	};
};

export class Divider extends Component {
	render(){
		return (
			<AntDivider className="details-component-devider" />
		);
	};
};

export class Merger extends Component {
	render(){
		let { children = [] } = this.props;

		return (
			<Row className="details-component-merger">
				<Col span="12">{children[0] || children}</Col>
				<Col span="12">{children[1]}</Col>
			</Row>
		);
	};
};

export class Info extends Component {
	render(){
		let { text = "", children, compact, className = "" } = this.props;

		return (
			<Row className={`details-component-info ${className}`}>
				<Col span={compact ? 4 : 2}>{text}</Col>
				<Col span={compact ? 16 : 20}>{children}</Col>
			</Row>
		);
	};
};

export class InputInfo extends Component {
	render(){
		let props = this.props;
		let { text, options = [], noplaceholder, disabled, defaultValue} = props;

		return (
			<Info className="details-component-inputinfo" {...props}>
				<Input
					placeholder={noplaceholder ? "" : `填写${text}`}
					size="large"
					disabled={disabled}
					defaultValue={defaultValue} />
			</Info>
		);
	};
};

export class OptionData {
	key = "";
	text = "";

	constructor(key, text){
		this.key = key;
		this.text = text.toString();
	};
};

export class SelectorInfo extends Component {
	static OptionData = OptionData;

	filterOption(input, option){
		return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
	};

	render(){
		let props = this.props, { text, onChange, options = [] } = props;

		return (
			<Info className="details-component-selectorinfo" {...props}>
				<Select
					showSearch
					placeholder={"选择" + text}
					optionFilterProp="children"
					filterOption={this.filterOption}
					size="large"
					onChange={onChange}
				>
					{
						options.map((option) => {
							let { text, key } = option;

							return <Option key={key} value={text}>{text}</Option>;
						})
					}
				</Select>
			</Info>
		);
	};
};

export class DraggerInfo extends Component {
	render(){
		let { props: { onChange }, props } = this;

		return (
			<Info className="details-component-draggerinfo" {...props}>
				<Dragger
					multiple
					beforeUpload={()=> { return false; }}
					onChange={onChange}
				>
					<p className="ant-upload-hint">
						上传附件
						<Button size="large">添加文件</Button>
					</p>
				</Dragger>
			</Info>
		);
	};
};

export class TextAreaInfo extends Component {
	render(){
		let { props: { rows = 8, noplaceholder, text }, props } = this;

		return (
			<Info className="details-component-textareainfo" {...props}>
				<TextArea rows={rows} placeholder={noplaceholder ? "" : `填写${text}`} />
			</Info>
		);
	};
};

export class Image extends Component {
	render(){
		let { props: { src, size="small", className = "" } } = this;

		if(size === "large"){
			return (
				<div className={`details-component-image ${size}-size ${className}`}>
					<img src={src} />
				</div>
			);
		}

		return (
			<div className={`details-component-image ${size}-size ${className}`} style={{backgroundImage: `url(${src})`}} />
		);
	};
};

export class Tools extends Component {
	render(){
		let { children, className = "" } = this.props;

		return (
			<div className={`details-component-tools ${className}`}>{children}</div>
		);
	};
};

export default class extends Component {
	static Divider = Divider;
	static DraggerInfo = DraggerInfo;
	static Merger = Merger;
	static Image = Image;
	static Info = Info;
	static InputInfo = InputInfo;
	static SelectorInfo = SelectorInfo;
	static TextAreaInfo = TextAreaInfo;
	static Title = Title;
	static Tools = Tools;

	render(){
		let { children, className = "" } = this.props;

		return (
			<div className={`details-component ${className}`}>{children}</div>
		);
	};
};
