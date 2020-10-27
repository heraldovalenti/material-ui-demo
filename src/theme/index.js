import { createMuiTheme } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { componentProps, componentOverrides } from "./components";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    palette: {
        primary: {
            main: deepOrange[500],
        },
        secondary: {
            main: deepPurple[800],
        },
    },
    props: {
        ...componentProps,
    },
    overrides: {
        ...componentOverrides,
        MuiCssBaseline: {
            "@global": {
                html: {
                    WebkitFontSmoothing: "auto",
                },
            },
        },
    },
});

export default theme;
