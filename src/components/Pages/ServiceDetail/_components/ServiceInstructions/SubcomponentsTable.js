import React, { Fragment, useState, useEffect, useMemo, useCallback } from "react";
import { useExpanded, useTable } from "react-table";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Switch from "@material-ui/core/Switch";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import makeData from "../../../../../data/makeData";
import ServiceTypeCapital from "../../../../ServiceTypeCapital";

function SubRows({ row, rowProps, visibleColumns, data, loading }) {
    if (loading) {
        return (
            <TableRow>
                <TableCell colSpan={visibleColumns.length - 1}>
                    <CircularProgress />
                </TableCell>
            </TableRow>
        );
    }

    // error handling here :)

    return (
        <>
            {data.map((x, i) => {
                return (
                    <TableRow {...rowProps} key={`${rowProps.key}-expanded-${i}`}>
                        {row.cells.map((cell) => {
                            return (
                                <TableCell {...cell.getCellProps()}>
                                    {cell.render(cell.column.SubCell ? "SubCell" : "Cell", {
                                        value: cell.column.accessor && cell.column.accessor(x, i),
                                        row: { ...row, original: x },
                                    })}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </>
    );
}

function SubRowAsync({ row, rowProps, visibleColumns }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData(makeData(3));
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return <SubRows row={row} rowProps={rowProps} visibleColumns={visibleColumns} data={data} loading={loading} />;
}

function SubcomponentsTable({ columns: userColumns, data, renderRowSubComponent }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } = useTable(
        {
            columns: userColumns,
            data,
        },
        useExpanded,
    );

    return (
        <TableContainer>
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        const rowProps = row.getRowProps();
                        return (
                            <Fragment key={rowProps.key}>
                                <TableRow {...rowProps}>
                                    {row.cells.map((cell) => {
                                        return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>;
                                    })}
                                </TableRow>
                                {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns })}
                            </Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function ExpandButton({ row }) {
    return (
        <IconButton aria-label={row.isExpanded ? "Collapse" : "Expand"} {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <ChevronRightIcon /> : <ExpandMoreIcon />}
        </IconButton>
    );
}

function ToggleSwitch() {
    return <Switch name="toggleInstruction" inputProps={{ "aria-label": "Toggle Instruction" }} />;
}

function App() {
    const columns = useMemo(
        () => [
            {
                Header: () => null,
                id: "expandButton",
                Cell: ({ row }) => <ExpandButton row={row} />,

                SubCell: () => null,
            },
            {
                Header: () => null,
                id: "toggleSwitch",
                accessor: "toggleSwitch",
                Cell: ({ row }) => <ToggleSwitch row={row} />,

                SubCell: () => null,
            },
            {
                Header: () => null,
                accessor: "serviceType",
                Cell: ({ row }) => {
                    const type = row.values.serviceType;

                    return <ServiceTypeCapital type={type} />;
                },

                SubCell: () => null,
            },
            {
                Header: "Verb",
                accessor: "verb",
            },
            {
                Header: "Entity",
                accessor: "entity",
            },
            {
                Header: "Rest of the Name",
                accessor: "restOfTheName",
            },
            {
                Header: "Project",
                accessor: "project",
            },
        ],
        [],
    );

    const data = useMemo(() => makeData(10), []);

    const renderRowSubComponent = useCallback(
        ({ row, rowProps, visibleColumns }) => (
            <SubRowAsync row={row} rowProps={rowProps} visibleColumns={visibleColumns} />
        ),
        [],
    );

    return <SubcomponentsTable columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />;
}

export default App;
