import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import AssignIssueModal from "./AssignIssueModal";

export default function AssignIssue() {
    const [issueAssigned, setIssueAssigned] = useState(true);
    const [assignee] = useState("Kore Kore Marian");

    const handleAssignment = () => {
        setIssueAssigned(true);
    };

    const handleUnassignment = () => {
        setIssueAssigned(undefined);
    };

    return (
        <>
            {issueAssigned ? (
                <Chip label={assignee} onDelete={handleUnassignment} />
            ) : (
                <Button onClick={handleAssignment}>Assign to me</Button>
            )}

            <AssignIssueModal trigger={"TECCORE-1126"} />
        </>
    );
}
