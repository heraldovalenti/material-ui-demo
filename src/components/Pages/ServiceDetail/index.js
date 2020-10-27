import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import ServiceDetailHeader from "./_components/ServiceDetailHeader";
import ServiceInstructions from "./_components/ServiceInstructions";
import ServiceParameters from "./_components/ServiceParameters";
import InstructionParameters from "./_components/InstructionParameters";

// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";

function ServiceDetail() {
    const [instructionSelected] = useState(true);

    return (
        <>
            <ServiceDetailHeader />

            {/* <GridList cellHeight="100%" cols={3} rows={2} spacing={24} component="div">
                <GridListTile cols={2} rows={2} component="div">
                    <ServiceInstructions />
                </GridListTile>
                <GridListTile cols={1} rows={1} component="div">
                    <ServiceParameters />
                </GridListTile>
                {instructionSelected ? (
                    <GridListTile cols={1} rows={1} component="div">
                        <InstructionParameters />
                    </GridListTile>
                ) : null}
            </GridList> */}

            <Grid container spacing={3} component="main">
                <Grid item xs={8}>
                    <ServiceInstructions />
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={12}>
                            <ServiceParameters />
                        </Grid>
                        {instructionSelected ? (
                            <Grid item xs={12}>
                                <InstructionParameters />
                            </Grid>
                        ) : null}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ServiceDetail;
