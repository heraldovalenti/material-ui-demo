import React from "react";

import Grid from "@material-ui/core/Grid";

import ServiceDetailHeader from "./_components/ServiceDetailHeader";
import ServiceParameters from "./_components/ServiceParameters";
import ParameterAttributes from "./_components/ParameterAttributes";

function ServiceDetail() {
    return (
        <>
            <ServiceDetailHeader />

            <Grid container spacing={3} component="main">
                <Grid item xs={6}>
                    <ServiceParameters />
                </Grid>

                <Grid item xs={6}>
                    <ParameterAttributes />
                </Grid>
            </Grid>
        </>
    );
}

export default ServiceDetail;
