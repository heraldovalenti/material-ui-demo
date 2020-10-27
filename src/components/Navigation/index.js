import React from "react";

import { Switch } from "react-router-dom";

import AuthenticatedLayout from "./Layouts/AuthenticatedLayout";
// import ServiceDetail from "../Pages/ServiceDetail";
import ServiceParameters from "../Pages/ServiceParameters";

const Navigation = () => {
    return (
        <Switch>
            {/* <AuthenticatedLayout exact component={ServiceDetail} route="/a" /> */}
            <AuthenticatedLayout component={ServiceParameters} route="/b" />
        </Switch>
    );
};

export default Navigation;
