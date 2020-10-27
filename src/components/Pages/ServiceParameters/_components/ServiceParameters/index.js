import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "./Table";

function ServiceParameters() {
    return (
        <Paper style={{ padding: "16px" }}>
            <Grid container justify="space-between">
                <Typography variant="h5" component="h2">
                    Service parameters
                </Typography>
            </Grid>
            <Box>
                <Table />
            </Box>
        </Paper>
    );
}

export default ServiceParameters;
