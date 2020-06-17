import React, { useMemo } from 'react';
import DataTable from './DataTable';

import { formatNum, getStateName } from '../helper-functions/formatters';

function StateDataTable({ data }) {

    const formattedData = data.map(stateData => {
        return {...stateData, stateName: getStateName(stateData.state)}
    })

    const columns = useMemo(
        () => [
            {
                Header: 'State', 
                accessor: 'stateName'
            },
            {
                Header: 'New Cases', 
                accessor: 'positiveIncrease', 
                Cell: props => props.value > 0 ? `+${formatNum(props.value)}` : props.value
            },
            {
                Header: 'New Deaths', 
                accessor: 'deathIncrease',
                Cell: props => props.value > 0 ? `+${formatNum(props.value)}` : props.value
            },
            {
                Header: 'Total Cases', 
                accessor: 'positive', 
                Cell: props => formatNum(props.value)
            },
            {
                Header: 'Total Deaths', 
                accessor: 'death', 
                Cell: props => formatNum(props.value)
            },
            {
                Header: 'Current Critical', 
                accessor: 'inIcuCurrently', 
                Cell: props => formatNum(props.value)
            },
            {
                Header: 'Total Recovered', 
                accessor: 'recovered', 
                Cell: props => formatNum(props.value)
            },
            {
                Header: 'Total Tests', 
                accessor: 'totalTestResults', 
                Cell: props => formatNum(props.value)
            },
        ],
        []
    );

    return (
        <DataTable 
            columns={columns} 
            data={formattedData} 
        />
    )
}

export default StateDataTable;
