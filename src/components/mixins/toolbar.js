import React, { Component } from "react";
import { Layout, Button as AntdButton, Input, Select as AntdSelect, Icon, Row, Col, Tabs as AntdTabs } from "antd";

let { Content, Sider } = Layout;
let { TabPane } = AntdTabs;

export class Button extends Component {
	render(){
		var { icon = "plus", onClick, text, className } = this.props;

		return (
			<AntdButton
				className={`toolbar-component-button ${className}`}
				type="primary"
				size="large"
				icon={icon}
				onClick={onClick}
			>
				{text}
			</AntdButton>
		);
	};
};

export class Text extends Component {
	render(){
		var { text, className } = this.props;

		return (
			<p className={`toolbar-component-text ${className}`}>{text}</p>
		);
	};
};

export class Search extends Component {
	render(){
		var { placeholder = "搜索", onPressEnter, className } = this.props;

		return (
			<Input
				className={`toolbar-component-search ${className}`}
				placeholder={placeholder}
				onPressEnter={onPressEnter}
				size="large"
				prefix={<Icon type="search" />}
			/>
		);
	};
};

export class Select extends Component {
	render() {
		var { defaultValue, options, onChange } = this.props;

		return (
			<AntdSelect
			// TODO: customize size and className/style props
				size="large"
				className="wp-10"
				defaultValue={defaultValue}
				onChange={onChange}>
				{options.map(option => <AntdSelect.Option value={option.value} key={option.value}>{option.label}</AntdSelect.Option>)}
			</AntdSelect>
		)
	}
};

export class Tab extends Component {
	render(){
		let { onFocus, children } = this.props;

		return (
			<div onFocus={onFocus}>{children}</div>
		);
	};
};

export class Tabs extends Component {
	static Tab = Tab;

	constructor(props){
		super(props);

		this.activeKey = props.activeKey || "0";
	};

	onChange(index){
		let { props: { children } } = this;

		if(!children){
			return;
		}

		let { props: { onChange } } = this, onFocus = (children[index] || children).props.onFocus;

		onChange && onChange(index);
		onFocus && onFocus(index);
	};

	componentDidMount(){
		this.onChange(this.activeKey);
	};

	render(){
		let { activeKey, props: { children, onChange } } = this;

		return (
			<AntdTabs
				className="toolbar-component-tabs"
				defaultActiveKey={activeKey}
				onChange={(index) => {
					this.onChange(index);
				}}
			>
				{children.map((tab, i) => {
					let { children } = tab.props;

					return <TabPane tab={children} key={i} />;
				})}
			</AntdTabs>
		);
	};
};

export default class extends Component {
	static Button = Button;
	static Search = Search;
	static Text = Text;
	static Select = Select;
	static Tabs = Tabs;

	render(){
		var { title, button, search, select } = this.props;
		return (
			<Layout className="toolbar-component">
				<Content>{title}</Content>
				<Sider width={ select !== undefined ? "500" : "390"}>
					{select !== undefined ?
					<Row gutter={10}>
						<Col span="10">{search}</Col>
						<Col span="7">{select}</Col>
						<Col span="7">{button}</Col>
					</Row>
					:
					<Row gutter={10}>
						<Col span="14">{search}</Col>
						<Col span="10">{button}</Col>
					</Row>}
				</Sider>
			</Layout>
		)
	};
};