import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const Logout = () => {
    return (
        <Tooltip title="Logout" placement="right">
            <IconButton aria-label="Logout">
                <PowerSettingsNewIcon />
            </IconButton>
        </Tooltip>
    );
};

export default Logout;
