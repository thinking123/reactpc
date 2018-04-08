import React, { Component } from "react";
import { Table, Button, Input, InputNumber } from "antd";

let { Group } = Button;

export class EditableCell extends Component {
	static INPUT_TYPE_DEFAULT = 0b10;
	static INPUT_TYPE_NUMBER = 0b100;

	value = "";

	constructor(props){
		super(props);

		this.state = {
			editable: false,
			value: props.value
		};

		this.value = props.value;
	};

	cancel(){
		this.unedit();
	};

	edit(){
		this.setState({ editable: true })
	};

	unedit(){
		this.setState({ editable: false, value: this.value });
	};

	save(){
		var value = this.state.value;

		this.props.onSave(value);

		if(this.props.onSave(value) !== false){
			this.value = value;
			this.unedit();
		}
	};

	renderButton(text, callback){
		return (
			<Button size="small" onClick={callback}>{text}</Button>
		);
	};

	render(){
		var { state, props } = this, { editable, value } = state,
		
			{ onSave, inputType = EditableCell.INPUT_TYPE_DEFAULT, min = 0, max = Infinity } = props;

		if(editable){
			return (
				<div className="editable-cell">
					{
						(inputType & EditableCell.INPUT_TYPE_DEFAULT === EditableCell.INPUT_TYPE_DEFAULT) ?
							(
								<Input
									value={value}
									onChange={(e) => {
										this.setState({ value: e.target.value });
									}}
								/>
							) :
							(
								<InputNumber
									min={min}
									max={max}
									value={value}
									onChange={(v) => {
										this.setState({ value: v });
									}}
								/>
							)
					}
					
					<div className="editable-cell-buttons">
						{
							this.renderButton(
								"保存",
								() => {
									this.save();
								}
							)
						}
						{
							this.renderButton(
								"取消",
								() => {
									this.cancel();
								}
							)
						}
					</div>
				</div>
			);
		}

		return (
			<div className="editable-cell">
				<span>{value}</span>
				<div className="editable-cell-buttons">
					{
						this.renderButton(
							"编辑", 
							() => {
								this.edit();
							}
						)
					}
				</div>
			</div>
		);
	};
};

export class ColumnData {
	dataIndex = "";
	key = "";
	title = "";
	render = null;
	width = "";

	/**
	 * 列数据类
	 * @param {String} title - 列名
	 * @param {String} key - 列的标识符
	 */
	constructor(title, key, render = null, width){
		this.title = title;
		this.key = this.dataIndex = key;
		this.render = render;
		this.width = width;
	};
};

export default class extends Component {
	static ColumnData = ColumnData;
	static EditableCell = EditableCell;

	render(){
		return (
			<Table className="table-component" {...this.props} />
		)
	};
};