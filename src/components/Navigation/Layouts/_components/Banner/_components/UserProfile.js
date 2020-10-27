import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const UserProfile = () => {
    return (
        <Tooltip title="User profile" placement="right">
            <IconButton aria-label="User profile">
                <PermIdentityIcon />
            </IconButton>
        </Tooltip>
    );
};

export default UserProfile;
