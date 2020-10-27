import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const useTreeItemStyles = makeStyles((theme) => ({
    root: {
        "&:focus > $content $label": {
            // backgroundColor: "blue",
        },
    },
    content: {},
    group: {
        marginLeft: 0,
        "& $content": {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    selected: {
        // backgroundColor: "red",
    },
    label: {
        fontWeight: "inherit",
        color: "inherit",
    },
    labelRoot: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0.5, 0),
    },
    labelText: {
        fontWeight: "inherit",
        flexGrow: 1,
    },
}));

function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <>
                    <ListItem className={classes.labelRoot}>
                        <Typography variant="body2" className={classes.labelText}>
                            {labelText}
                        </Typography>
                    </ListItem>
                </>
            }
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

export default function MultiSelectTreeView({ data }) {
    const renderNode = ({ node }) => {
        const { name, childrens } = node;
        return (
            <StyledTreeItem nodeId={name} labelText={name}>
                {childrens && childrens.map((child) => renderNode({ node: child }))}
            </StyledTreeItem>
        );
    };
    return (
        <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />} multiSelect>
            {data.map((node) => renderNode({ node }))}
        </TreeView>
    );
}
