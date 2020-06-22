import React from 'react';
import styles from './DataCharts.module.css';

import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { formatNum, formatDate } from '../helper-functions/formatters';

function DataCharts({ data }) {

    const formattedGraphData = data.map(dailyData => {
        const formattedData = {
            date: formatDate(dailyData.date),
            newCases: dailyData.positiveIncrease >= 0 ? dailyData.positiveIncrease : 0,
            totalCases: dailyData.positive >= 0 ? dailyData.positive : 0,
            newDeaths: dailyData.deathIncrease >= 0 ? dailyData.deathIncrease : 0,
            totalDeaths: dailyData.death >= 0 ? dailyData.death : 0,
            recovered: dailyData.recovered >= 0 ? dailyData.recovered : 0,
            totalTestResults: dailyData.totalTestResults >= 0 ? dailyData.totalTestResults : 0
        }
        return formattedData;
    });

    return (
        <Card className={styles.chartContainer}>
            <Card.Body>
                <Tabs defaultActiveKey="total-cases" className={styles.chartNavTabs}>
                    <Tab eventKey="total-cases" title="Total Cases">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Cases"]}/>
                            <Bar dataKey="totalCases" fill="grey" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="daily-cases" title="Daily Cases">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Daily Cases"]} />
                            <Bar dataKey="newCases" fill="grey" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-deaths" title="Total Deaths">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Deaths"]} />
                            <Bar dataKey="totalDeaths" fill="red" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="daily-deaths" title="Daily Deaths">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Daily Deaths"]} />
                            <Bar dataKey="newDeaths" fill="red" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-recoveries" title="Total Recovered">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Recovered"]} />
                            <Bar dataKey="recovered" fill="green" />
                        </BarChart>
                    </Tab>
                    <Tab eventKey="total-test-results" title="Total Tested">
                        <BarChart width={1000} height={400} margin={{top: 50, right: 0, bottom: 10, left: 10}} data={formattedGraphData}>
                            <CartesianGrid strokeDasharray="3" vertical={false}/>
                            <XAxis dataKey="date" />
                            <YAxis width={100} tickFormatter={tick => tick.toLocaleString()}/>
                            <Tooltip formatter={(data, name) => [formatNum(data), "Total Test Results"]} />
                            <Bar dataKey="totalTestResults" fill="green" />
                        </BarChart>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}


export default DataCharts;