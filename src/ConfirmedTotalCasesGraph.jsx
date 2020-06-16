import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { formatNum, formatDate } from './formatters';

function ConfirmedTotalCasesGraph({ data }) {

    const formattedGraphData = data.reverse().map(dailyData => {
        const formattedData = {
            date: formatDate(dailyData.date),
            newCases: dailyData.positiveIncrease,
            totalCases: dailyData.positive
        }
        return formattedData;
    });


    return (
        <div>
            <LineChart width={600} height={300} data={formattedGraphData} margin={{ top: 5, right: 25, bottom: 5, left: 25 }}>
                <Line type="monotone" dataKey="totalCases" stroke="#8884d8" dot={false}/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(data, name) => [formatNum(data), "Total Cases"]}/>
            </LineChart>
        </div>
    )
}


export default ConfirmedTotalCasesGraph;