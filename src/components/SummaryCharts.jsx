import React from 'react';
import '../App.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { formatNum, formatDate } from '../helper-functions/formatters';

function SummaryCharts({ data }) {

    console.log(data)
    const formattedGraphData = data.reverse().map(dailyData => {
        const formattedData = {
            date: formatDate(dailyData.date),
            newCases: dailyData.positiveIncrease,
            totalCases: dailyData.positive,
            newDeaths: dailyData.deathIncrease,
            totalDeaths: dailyData.death,
            recovered: dailyData.recovered,
            totalTestResults: dailyData.totalTestResults
        }
        return formattedData;
    });

    const filteredDeathData = formattedGraphData.filter(dailyData => {
        return dailyData.totalDeaths;
    })

    return (
        <div id="chart-container">
            <div>
                <Tabs defaultActiveKey="total-cases" id="chart-nav-bar">
                    <Tab eventKey="total-cases" title="Total Cases">
                        <BarChart width={1000} height={250} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Cases"]}/>
                            <Bar dataKey="totalCases" fill="black" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="daily-cases" title="Daily Cases">
                        <BarChart width={1000} height={250} data={filteredDeathData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Daily Cases"]} />
                            <Bar dataKey="newCases" fill="black" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-deaths" title="Total Deaths">
                        <BarChart width={1000} height={250} data={filteredDeathData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Deaths"]} />
                            <Bar dataKey="totalDeaths" fill="red" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="daily-deaths" title="Daily Deaths">
                        <BarChart width={1000} height={250} data={filteredDeathData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Daily Deaths"]} />
                            <Bar dataKey="newDeaths" fill="red" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-recoveries" title="Total Recovered">
                        <BarChart width={1000} height={250} data={filteredDeathData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Recovered"]} />
                            <Bar dataKey="recovered" fill="green" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-test-results" title="Total Tests">
                        <BarChart width={1000} height={250} data={filteredDeathData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={80} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Test Results"]} />
                            <Bar dataKey="totalTestResults" fill="green" />
                        </BarChart>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}


export default SummaryCharts;