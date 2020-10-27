import React from "react";
import RootProvider from "./_components/RootProvider";
import ErrorBoundary from "./_components/ErrorBoundary";
import theme from "../../theme";
import Navigation from "../Navigation";

function App() {
    return (
        <RootProvider theme={theme}>
            <ErrorBoundary>
                <Navigation />
            </ErrorBoundary>
        </RootProvider>
    );
}

export default App;
