import React from "react";
import {useSortBy, useTable, useFilters} from "react-table";
import "./style.css";

// Define a default UI for filtering
function DefaultColumnFilter({column: {filterValue, preFilteredRows, setFilter}}) {
    const count = preFilteredRows.length

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            onClick={(e)=> e.stopPropagation()}
            style={{width: '100%'}}
            placeholder={`Search...`}
        />
    )
}

const DataTable = ({columns, data}) => {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFilters,
        useSortBy,
    );

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => {

                        console.log("column")
                        console.log(column)
                        return (
                        <th
                            {...column.getHeaderProps([
                                {
                                    className: column.className
                                },
                                column.getSortByToggleProps()
                            ])}
                        >
                            {column.render("Header")}
                            <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                        </th>
                    )})}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps([
                                        {
                                            className: cell.column.className,
                                            style: cell.column.style
                                        },
                                    ])}
                                >
                                    {cell.render("Cell")}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default DataTable;