import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

import useUtilStyles from "../../../../../hooks/useUtilStyles";

import ServiceTypeCapital from "../../../../ServiceTypeCapital";

function AppPanel() {
    return (
        <Box component="aside">
            <Typography variant="h4" component="h2">
                Services
            </Typography>
            <List component="nav">
                <ServiceListItem name="setAccountAccum_Pending_Txn" type="primitive" />
                <ServiceListItem name="insertLoan_Approval_By_Aditamento" type="composite" />
                <ServiceListItem name="insertLoan_Approval_By_Aditamento_1" type="top level" />
            </List>
        </Box>
    );
}

function ServiceListItem({ name, type }) {
    const classes = useUtilStyles();

    return (
        <ListItem button>
            <ServiceTypeCapital type={type} />

            <Typography noWrap={true} component="span" className={classes.inlineGapItem1}>
                {name}
            </Typography>
        </ListItem>
    );
}

export default AppPanel;
