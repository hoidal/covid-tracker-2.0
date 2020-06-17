import React, { useMemo, useState, useEffect } from 'react';
import DataTable from './DataTable';

import { formatNum, formatDate, getStateName } from './formatters';

function StateDataTable({ data }) {

    const formattedData = data.map(stateData => {
        return {...stateData, stateName: getStateName(stateData.state)}
    })

    const columns = useMemo(
        () => [
            {Header: 'State', accessor: 'stateName'},
            {Header: 'New Cases', accessor: 'positiveIncrease'},
            {Header: 'New Deaths', accessor: 'deathIncrease'},
            {Header: 'Total Cases', accessor: 'positive'},
            {Header: 'Total Deaths', accessor: 'death'},
            {Header: 'Current Critical', accessor: 'inIcuCurrently'},
            {Header: 'Total Recovered', accessor: 'recovered'},
            {Header: 'Total Tests', accessor: 'totalTestResults'},
        ],
        []
    );


    return (
        <DataTable columns={columns} data={formattedData} />
    )
}

export default StateDataTable;
