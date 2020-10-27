import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBanner from "./_components/Banner";
import AppHeader from "./_components/Header";
import AppPanel from "./_components/Panel";

const UnauthenticatedLayout = ({ component: ReceivedComponent, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => {
                return (
                    <Grid container direction="row" wrap="nowrap">
                        <Grid item style={{ backgroundColor: "#ff5722", padding: "24px" }} xs={1}>
                            <AppBanner />
                        </Grid>
                        <Grid item style={{ backgroundColor: "white", padding: "24px" }} xs={2}>
                            <AppPanel />
                        </Grid>
                        <Grid item style={{ padding: "24px" }} xs={9}>
                            <Grid container direction="column">
                                <AppHeader />
                                <ReceivedComponent {...matchProps} />
                            </Grid>
                        </Grid>
                    </Grid>
                );
            }}
        />
    );
};

export default UnauthenticatedLayout;
