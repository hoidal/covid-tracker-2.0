import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from "react-table";

function DataTable({ columns, data }) {

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
            initialState: {
                sortBy: [{ id: 'positiveIncrease', desc: true }]
            }
        },
        useSortBy
    );

    return (
        <Table style={{marginTop: '1rem'}} bordered {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td 
                                        style={
                                            cell.column.Header === 'New Deaths' && cell.value > 0 
                                                ? {background: 'red', fontWeight: 'bold'} 
                                                : cell.column.Header === 'New Cases' && cell.value > 0
                                                    ? {background: '#ffffcc', fontWeight: 'bold'}
                                                    : null
                                        }
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}             
            </tbody>
        </Table>
    )
}

export default DataTable;
