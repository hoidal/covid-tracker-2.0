import React from 'react';
import './App.css';

import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
import { formatNum, formatDate } from './formatters';

function SummaryCharts({ data }) {

    const formattedGraphData = data.reverse().map(dailyData => {
        const formattedData = {
            date: formatDate(dailyData.date),
            newCases: dailyData.positiveIncrease,
            totalCases: dailyData.positive,
            newDeaths: dailyData.deathIncrease,
            totalDeaths: dailyData.death
        }
        return formattedData;
    });

    const filteredDeathData = formattedGraphData.filter(dailyData => {
        return dailyData.totalDeaths;
    })

    return (
        <div id="chart-container">
            <div>
                <h5>Total Cases</h5>
                <BarChart width={500} height={250} data={formattedGraphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis width={80}/>
                    <Tooltip formatter={(data, name) => [formatNum(data), "Total Cases"]}/>
                    <Bar dataKey="totalCases" fill="#8884d8" />
                </BarChart>
            </div>
            <div>
                <h5>Total Deaths</h5>
                <BarChart width={500} height={250} data={filteredDeathData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis width={80}/>
                    <Tooltip formatter={(data, name) => [formatNum(data), "Total Deaths"]} />
                    <Bar dataKey="totalDeaths" fill="red" />
                </BarChart>
            </div>
        </div>
    )
}


export default SummaryCharts;