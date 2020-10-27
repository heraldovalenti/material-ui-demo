import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
    return (
        <Tooltip title="Search" placement="right">
            <IconButton aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Tooltip>
    );
};

export default Search;
