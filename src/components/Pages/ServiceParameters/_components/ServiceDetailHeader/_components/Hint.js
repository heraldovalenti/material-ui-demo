import React from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function TooltopContent() {
    return (
        <List>
            <ListItem>
                <ListItemText>Branch: develop</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Project: Tech</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Module: Loans</ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText>This service is being used 1 times</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Version 4</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Last modified: August 8, 2018 9:53 AM</ListItemText>
            </ListItem>
        </List>
    );
}

function SimplePopover() {
    return (
        <>
            <Tooltip title={<TooltopContent />}>
                <IconButton aria-label="More info">
                    <ErrorOutlineIcon />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default SimplePopover;
