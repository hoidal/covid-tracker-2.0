import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './SummaryTable.module.css';

import { formatNum, formatDate } from '../../util/formatters';

function SummaryTable({ data }) {
    const totalDeaths = data.death ? formatNum(data.death) : '-';
    const totalRecovered = data.recovered ? formatNum(data.recovered) : '-';
    const currentCritical = data.inIcuCurrently ? formatNum(data.inIcuCurrently) : '-';
    const totalConfirmedCases = data.positive ? formatNum(data.positive) : '-';
    const totalTested = data.totalTestResults ? formatNum(data.totalTestResults) : '-';
    const newCases = data.positiveIncrease ? `+${formatNum(data.positiveIncrease)}` : '-';
    const newDeaths = data.deathIncrease ? `+${formatNum(data.deathIncrease)}` : '-';
    const dataUpdateDate = data.date ? `Last Updated: ${formatDate(data.date)}` : '';

    // cell styling for new cases and deaths in table
    const newCasesCellStyle = newCases !== '-' ? {background: "#ffffcc"} : null;
    const newDeathsCellStyle = newDeaths !== '-' ? {background: "red"} : null;
    return (
        <div>
            <div className={styles.dateUpdatedLabel}>
                {dataUpdateDate}
            </div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>New Cases</th>
                        <th>New Deaths</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Current Critical Patients</th>
                        <th>Total Recovered</th>
                        <th>Total Tested</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={newCasesCellStyle}>{newCases}</td>
                        <td style={newDeathsCellStyle}>{newDeaths}</td>
                        <td>{totalConfirmedCases}</td>
                        <td>{totalDeaths}</td>
                        <td>{currentCritical}</td>
                        <td>{totalRecovered}</td>
                        <td>{totalTested}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default SummaryTable;
