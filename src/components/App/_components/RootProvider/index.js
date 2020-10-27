import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const RootProvider = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>{children}</Router>
        </ThemeProvider>
    );
};

export default RootProvider;
