import React from "react";

import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

function ServiceTypeCapital({ type, size = "small" }) {
    const typeLetter = type.charAt(0).toUpperCase();

    return (
        <Box>
            <Chip label={typeLetter} size={size} aria-hidden color={type === "top level" ? "primary" : "default"} />
            <Typography variant="srOnly">{`${type} service`}</Typography>
        </Box>
    );
}

export default ServiceTypeCapital;
