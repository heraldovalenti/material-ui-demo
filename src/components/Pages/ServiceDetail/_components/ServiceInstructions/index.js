import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Table from "./SubcomponentsTable";

function ServiceInstructions() {
    return (
        <Paper style={{ padding: "16px" }}>
            <Table />

            <Grid container justify="flex-end">
                <Button>Add instructions</Button>
            </Grid>
        </Paper>
    );
}

export default ServiceInstructions;
