import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function DescriptionContent() {
    return (
        <List>
            <ListItem>
                <ListItemText>Goal: Register a record in the table approval</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Summary: This service is being used 1 times</ListItemText>
            </ListItem>
        </List>
    );
}

export default function AlertDialog({ trigger }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button color="primary" onClick={handleClickOpen}>
                {trigger}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Description</DialogTitle>
                <DialogContent>
                    <DescriptionContent />
                </DialogContent>
            </Dialog>
        </>
    );
}
