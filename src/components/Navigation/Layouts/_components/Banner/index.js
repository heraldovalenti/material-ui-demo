import React from "react";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core";

import Logo from "./_components/Logo";
import MainMenu from "./_components/MainMenu";
import Search from "./_components/Search";
import AddService from "./_components/AddService";
import UserProfile from "./_components/UserProfile";
import Settings from "./_components/Settings";
import Logout from "./_components/Logout";

import bannerTheme from "./styles";

function AppBanner() {
    return (
        <ThemeProvider theme={bannerTheme}>
            <Grid container direction="column" justify="space-between" component="header" style={{ height: "100%" }}>
                <Grid item>
                    <Logo />
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <MainMenu />
                        </Grid>
                        <Grid item>
                            <Search />
                        </Grid>
                        <Grid item>
                            <AddService />
                        </Grid>
                        <Grid item>
                            <Settings />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <UserProfile />
                        </Grid>
                        <Grid item>
                            <Logout />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default AppBanner;
