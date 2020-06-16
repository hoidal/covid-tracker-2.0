import React from 'react';
import Table from 'react-bootstrap/Table';

import { formatNum, formatDate } from './formatters';

function CurrentSummaryTable({ data }) {
    const totalDeaths = data.death ? formatNum(data.death) : '-';
    const totalRecovered = data.recovered ? formatNum(data.recovered) : '-';
    const currentCritical = data.inIcuCurrently ? formatNum(data.inIcuCurrently) : '-';
    const totalConfirmedCases = data.positive ? formatNum(data.positive) : '-';
    const totalTested = data.totalTestResults ? formatNum(data.totalTestResults) : '-';
    const newCases = data.positiveIncrease ? formatNum(data.positiveIncrease) : '-';
    const newDeaths = data.deathIncrease ? formatNum(data.deathIncrease) : '-';
    const dataUpdateDate = data.date ? `Last Updated: ${formatDate(data.date)}` : '';

    // cell styling for new cases and deaths in table
    const newCasesCellStyle = newCases !== '-' ? {background: "#ffffcc"} : null;
    const newDeathsCellStyle = newDeaths !== '-' ? {background: "red"} : null;
    return (
        <div>
            <h3>Current Totals</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>New Cases</th>
                        <th>New Deaths</th>
                        <th>Critical Condition</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Total Tested</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={newCasesCellStyle}>{newCases}</td>
                        <td style={newDeathsCellStyle}>{newDeaths}</td>
                        <td>{currentCritical}</td>
                        <td>{totalConfirmedCases}</td>
                        <td>{totalDeaths}</td>
                        <td>{totalTested}</td>
                        <td>{totalRecovered}</td>
                    </tr>
                </tbody>
            </Table>
            <footer style={{textAlign: "right"}}>
                {dataUpdateDate}
            </footer>
        </div>
    )
}

export default CurrentSummaryTable;
