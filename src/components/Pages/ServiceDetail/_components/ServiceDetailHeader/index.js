import React from "react";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";

import ContextMenu from "./_components/ContextMenu";
import Actions from "./_components/Actions";
import Hint from "./_components/Hint";

import useUtilStyles from "../../../../../hooks/useUtilStyles";

function ServiceDetailHeader() {
    const classes = useUtilStyles();

    return (
        <Grid container justify="space-between" wrap="nowrap" component="header">
            <Grid item>
                <Grid container className={classes.inlineGapContainer2}>
                    <Grid item>
                        <Chip label="T" color="primary" aria-hidden />
                        <Typography variant="srOnly">top level service</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h1">
                            insertLoanNormal
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Hint />
                    </Grid>
                </Grid>
                <Grid container className={classes.inlineGapContainer1}>
                    <Box>
                        <Typography variant="srOnly">Status: </Typography>
                        <Chip label="in development" />
                    </Box>
                    <Actions />
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" startIcon={<CloudUploadOutlinedIcon />}>
                    Save
                </Button>
                <ContextMenu />
            </Grid>
        </Grid>
    );
}

export default ServiceDetailHeader;
