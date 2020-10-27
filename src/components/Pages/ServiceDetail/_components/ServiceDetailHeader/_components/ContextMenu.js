import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function ContextMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton aria-label="More actions" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                <MenuItem>
                    <ListItemText primary="Mark to deploy" />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="Discard Changes" />
                </MenuItem>
                <MenuItem>
                    <ListItemText primary="Show invokers" />
                </MenuItem>
                <Divider aria-hidden />
                <MenuItem>
                    <ListItemIcon>
                        <SaveAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Download swagger" />
                </MenuItem>
                <Divider aria-hidden />
                <MenuItem>
                    <ListItemIcon>
                        <DeleteOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Delete service" />
                </MenuItem>
            </Menu>
        </>
    );
}
