import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

const AddService = () => {
    return (
        <Tooltip title="Add service" placement="right">
            <IconButton aria-label="Add service">
                <AddIcon />
            </IconButton>
        </Tooltip>
    );
};

export default AddService;
