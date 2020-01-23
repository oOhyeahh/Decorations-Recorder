import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { addRecord } from "../../actions/targetAction";

class RecordForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first: undefined,
			second: undefined,
			third: undefined
		};
		this.handleAddRecord = this.handleAddRecord.bind(this);
	}

	handleAddRecord = () => {
		if (this.state.first && this.state.second && this.state.third) {
			let record = {
				round: this.props.record.length + 1,
				first: this.state.first,
				second: this.state.second,
				third: this.state.third
			};
			this.props.addRecord(record);
		}
	};

	render() {
		return (
			<React.Fragment>
				<Autocomplete
					freeSolo
					options={this.props.decoration}
					getOptionLabel={option => option.name}
					groupBy={option => option.rarity}
					onChange={(event, value) => this.setState({ first: value ? value.name : "" })}
					renderInput={params => (
						<TextField
							{...params}
							fullWidth
							label="Enter Your First Decoration"
							onChange={e => this.setState({ first: e.target.value })}
						/>
					)}
				/>
				<Autocomplete
					freeSolo
					options={this.props.decoration}
					getOptionLabel={option => option.name}
					groupBy={option => option.rarity}
					onChange={(event, value) => this.setState({ second: value ? value.name : "" })}
					renderInput={params => (
						<TextField
							{...params}
							fullWidth
							label="Enter Your Second Decoration"
							onChange={e => this.setState({ second: e.target.value })}
						/>
					)}
				/>
				<Autocomplete
					freeSolo
					options={this.props.decoration}
					getOptionLabel={option => option.name}
					groupBy={option => option.rarity}
					onChange={(event, value) => this.setState({ third: value ? value.name : "" })}
					renderInput={params => (
						<TextField
							{...params}
							fullWidth
							label="Enter Your Third Decoration"
							onChange={e => this.setState({ third: e.target.value })}
						/>
					)}
				/>
				<Button variant="contained" color="primary" onClick={() => this.handleAddRecord()}>
					Submit Record
				</Button>
			</React.Fragment>
		);
	}
}

function mapStatetoProps(state) {
	return {
		decoration: state.decoration.decorations,
		record: state.record.records
	};
}

const mapDispatchToProps = (dispatch, data) => {
	return {
		addRecord: data => {
			dispatch(addRecord(data));
		}
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(RecordForm);
