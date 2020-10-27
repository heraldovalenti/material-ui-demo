import React, { useMemo, useCallback } from "react";
import { useTable, useBlockLayout } from "react-table";
import { FixedSizeList } from "react-window";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { SERVICE_INSTRUCTIONS_COLUMNS } from "../../../../../data";

import makeData from "../../../../../data/makeData";

const scrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.setAttribute("style", "width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;");
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};

function VirtualizedTable({ columns, data }) {
    const defaultColumn = useMemo(() => ({}), []);

    const scrollBarSize = useMemo(() => scrollbarWidth(), []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, totalColumnsWidth, prepareRow } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useBlockLayout,
    );

    const RenderRow = useCallback(
        ({ index, style }) => {
            const row = rows[index];
            prepareRow(row);
            return (
                <TableRow
                    {...row.getRowProps({
                        style,
                    })}>
                    {row.cells.map((cell) => {
                        return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>;
                    })}
                </TableRow>
            );
        },
        [prepareRow, rows],
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
                    <FixedSizeList
                        height={520}
                        width={totalColumnsWidth + scrollBarSize}
                        itemSize={52}
                        itemCount={rows.length}>
                        {RenderRow}
                    </FixedSizeList>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function App() {
    const columns = useMemo(() => SERVICE_INSTRUCTIONS_COLUMNS, []);

    const data = useMemo(() => makeData(100000), []);

    return <VirtualizedTable columns={columns} data={data} />;
}

export default App;
