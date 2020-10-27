import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";

import GlobalParameterFilter from "./GlobalParameterFilter";

import { SERVICE_INSTRUCTIONS_COLUMNS, SERVICE_INSTRUCTIONS_DATA } from "../../../../../data";

const FilterTable = () => {
    const columns = useMemo(() => SERVICE_INSTRUCTIONS_COLUMNS, []);
    const data = useMemo(() => SERVICE_INSTRUCTIONS_DATA, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable(
        { columns, data },
        useGlobalFilter,
    );

    const { globalFilter } = state;

    return (
        <>
            <Grid container justify="space-between">
                <FormControlLabel control={<Checkbox name="checked" />} label="Only active instructions" />
                <GlobalParameterFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </Grid>
            <Box>
                <TableContainer>
                    <Table {...getTableProps}>
                        <TableHead>
                            {headerGroups.map((headerGroup) => (
                                <TableRow {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody {...getTableBodyProps}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <TableRow {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default FilterTable;
