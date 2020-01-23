import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

// component
import TargetList from "./Components/TargetList/TargetList";
import RecordTable from "./Components/RecordTable/RecordTable";
import RecordForm from "./Components/RecordForm/RecordForm";

function App() {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<Typography variant="h6">Monster Hunter World Decoration Recorder</Typography>
				</Toolbar>
			</AppBar>
			<Box paddingTop={10}>
				<Typography variant="h5" align="center">
					A tool to record "washing" decorations
				</Typography>
				<Divider />
				<Grid container spacing={5}>
					<Grid item xs={6}>
						<TargetList />
					</Grid>
					<Grid item xs={6}>
						<Box m={2} p={2} border={1} borderColor="primary.main">
							<RecordForm />
						</Box>
					</Grid>
					<Grid item xs>
						<RecordTable />
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
}

export default App;
