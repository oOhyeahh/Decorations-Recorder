import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const columns = [
	{ id: "round", label: "Round", minWidth: 100 },
	{
		id: "first",
		label: "First",
		minWidth: 150,
		align: "left",
		format: value => value.toLocaleString()
	},
	{
		id: "second",
		label: "Second",
		minWidth: 150,
		align: "left",
		format: value => value.toLocaleString()
	},
	{
		id: "third",
		label: "Third",
		minWidth: 150,
		align: "left",
		format: value => value.toLocaleString()
	}
];

const useStyles = makeStyles({
	root: {
		width: "100%"
	},
	container: {
		maxHeight: 440
	}
});

function StickyHeadTable(props) {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	var targetList = [];
	for (var i = 0; i < props.target.length; i++) {
		targetList.push(props.target[i].description);
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{props.record &&
							props.record.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(record => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={record.id}>
										{columns.map(column => {
											const value = record[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{targetList.includes(value) ? (
														<Typography color="secondary">{value}</Typography>
													) : (
														value
													)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10]}
				component="div"
				count={props.record.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

function mapStateToProps(state) {
	return {
		record: state.record.records,
		target: state.target.targets
	};
}

export default connect(mapStateToProps)(StickyHeadTable);
