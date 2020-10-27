import { createMuiTheme } from "@material-ui/core";
import { IconButtonProps, IconButtonOverrides } from "../../../../../theme/components/IconButton";

const bannerTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
    props: {
        ...IconButtonProps,
    },
    overrides: {
        ...IconButtonOverrides,
    },
});

export default bannerTheme;
