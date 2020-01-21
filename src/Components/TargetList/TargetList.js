import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addDecortation, deleteDecortation } from "../../actions/targetAction";

class TargetList extends Component {
	constructor(props) {
		super(props);
		this.state = { target: undefined };
	}

	render() {
		return (
			<React.Fragment>
				<List subheader={<p>Target Decoration</p>}>
					<Divider />
					{this.props.targets &&
						this.props.targets.map(target => (
							<ListItem key={target.id}>
								<ListItemText primary={target.description} />
								<Button
									variant="outlined"
									color="secondary"
									onClick={() =>
										this.props.deleteDecortation(target.id)										
									}
								>
									Remove
								</Button>
							</ListItem>
						))}
				</List>
				<Divider />
				<Autocomplete
					freeSolo
					options={this.props.decoration}
					getOptionLabel={option => option.name}
					groupBy={option => option.rarity}
					onChange={(event, value) =>
						this.setState({ target: value ? value.name : "" })
					}
					renderInput={params => (
						<TextField
							{...params}
							label="Enter Your Target Decoration"
							variant="outlined"
							fullWidth
							onChange={e =>
								this.setState({ target: e.target.value })
							}
						/>
					)}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => this.props.addDecortation(this.state.target)}
				>
					Add to Target List
				</Button>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		targets: state.target.targets,
		target: state.target.target,
		decoration: state.decoration.decorations
	};
}

const mapDispatchToProps = (dispatch, data) => {
	return {
		addDecortation: data => {
			dispatch(addDecortation(data));
		},
		deleteDecortation: data => {
			dispatch(deleteDecortation(data));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TargetList);
