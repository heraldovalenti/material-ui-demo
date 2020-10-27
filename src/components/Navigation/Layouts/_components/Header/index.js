import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function AppHeader() {
    return (
        <Grid container direction="row" justify="space-between" component="nav">
            <Grid item>
                <Button component="a" href="/" startIcon={<ArrowBackIcon />}>
                    Return to parent service
                </Button>
            </Grid>
            <Grid item>
                <IconButton aria-label="delete">
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default AppHeader;
