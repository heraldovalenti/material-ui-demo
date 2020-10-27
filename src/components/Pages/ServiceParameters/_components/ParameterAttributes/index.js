import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AutocompleteDemo from "./AutocompleteDemo";
import TreeDemo from "./TreeDemo";

function ServiceParameters() {
    return (
        <Paper style={{ padding: "16px" }}>
            <Grid container justify="space-between">
                <Typography variant="h5" component="h3">
                    Add or Remove attributes to: in.loan
                </Typography>
            </Grid>
            <Grid container alignItems="center" style={{ marginTop: "16px" }}>
                <AutocompleteDemo data={data} />
                <Button variant="contained" color="primary" style={{ marginLeft: "16px" }}>
                    Add
                </Button>
            </Grid>
            <Divider style={{ marginTop: "16px" }} />
            <Box style={{ marginTop: "16px" }}>
                <TreeDemo data={data} />
            </Box>
        </Paper>
    );
}

const data = [
    { datamodel: "entities", domain: "core", type: "Date", name: "stamp_date_time" },
    {
        datamodel: "entities",
        domain: "core",
        type: "Date",
        name: "status_date",
        childrens: [
            { datamodel: "entities", domain: "core", type: "String", name: "official_id" },
            {
                datamodel: "entities",
                domain: "core",
                type: "String",
                name: "nemotecnico",
                childrens: [{ datamodel: "entities", domain: "core", type: "String", name: "stamp_additional" }],
            },
            { datamodel: "entities", domain: "core", type: "Integer", name: "id" },
            { datamodel: "entities", domain: "core", type: "String", name: "nemotecnico" },
        ],
    },
    { datamodel: "entities", domain: "core", type: "Integer", name: "status_id" },
    { datamodel: "entities", domain: "core", type: "String", name: "official_id" },
    { datamodel: "entities", domain: "core", type: "String", name: "nemotecnico" },
    { datamodel: "entities", domain: "core", type: "Integer", name: "id" },
    { datamodel: "entities", domain: "core", type: "String", name: "short_desc" },
    {
        datamodel: "product",
        domain: "financials",
        type: "StatusReason",
        name: "status_reason",
        childrens: [{ datamodel: "entities", domain: "core", type: "Integer", name: "id" }],
    },
    {
        datamodel: "product",
        domain: "financials",
        type: "SystemUser",
        name: "stamp_user",
        childrens: [{ datamodel: "entities", domain: "core", type: "Integer", name: "id" }],
    },
    { datamodel: "entities", domain: "core", type: "String", name: "stamp_additional" },
    {
        datamodel: "product",
        domain: "financials",
        type: "Status",
        name: "status",
        childrens: [{ datamodel: "entities", domain: "core", type: "Integer", name: "id" }],
    },
    { datamodel: "entities", domain: "core", type: "String", name: "long_desc" },
];

export default ServiceParameters;
