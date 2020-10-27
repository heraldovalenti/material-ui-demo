import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "./Table";
function InstructionParameters() {
    return (
        <Paper style={{ padding: "16px" }}>
            <Typography variant="h5" component="h2">
                Instruction Parameters
            </Typography>
            <Box>
                <Table />
            </Box>
        </Paper>
    );
}

export default InstructionParameters;
