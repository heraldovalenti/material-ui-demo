import React from "react";
import AssignIssue from "./AssignIssue";
import DescriptionModal from "./DescriptionModal";

function Actions() {
    return (
        <>
            <AssignIssue />
            <DescriptionModal trigger={"Description"} />
        </>
    );
}
export default Actions;
