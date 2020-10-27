import React from "react";
import TextField from "@material-ui/core/TextField";

function GlobalParameterFilter({ filter, setFilter }) {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            label="Global parameters"
            placeholder="Search on parameters from the table"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
        />
    );
}

export default GlobalParameterFilter;
