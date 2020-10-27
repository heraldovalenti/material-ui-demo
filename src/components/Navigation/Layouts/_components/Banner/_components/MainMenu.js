import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";

const MainMenu = () => {
    return (
        <Tooltip title="Main menu" placement="right">
            <IconButton aria-label="Main menu">
                <ListOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
};

export default MainMenu;
