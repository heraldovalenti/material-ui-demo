import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SettingsIcon from "@material-ui/icons/Settings";

const Settings = () => {
    return (
        <Tooltip title="Settings" placement="right">
            <IconButton aria-label="Settings">
                <SettingsIcon />
            </IconButton>
        </Tooltip>
    );
};

export default Settings;
