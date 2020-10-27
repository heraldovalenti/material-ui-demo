import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AssignIssueModal({ trigger }) {
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
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Do you want to assign an issue now?</DialogTitle>
                <DialogContent>
                    <TextField autoFocus id="name" label="Issue code" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Not Yet
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Assign
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
