import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Logo = () => {
    return (
        <IconButton aria-label="delete">
            <CloseIcon />
        </IconButton>
    );
};

export default Logo;
