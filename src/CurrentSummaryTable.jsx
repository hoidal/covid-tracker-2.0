import React from 'react';
import Table from 'react-bootstrap/Table';

function CurrentSummaryTable({ data }) {
    const totalDeaths = data.death ? data.death : '-';
    const totalRecovered = data.recovered ? data.recovered : '-';
    const currentCritical = data.inIcuCurrently ? data.inIcuCurrently : '-';
    const totalConfirmedCases = data.positive ? data.positive : '-';
    const totalTested = data.totalTestResults ? data.totalTestResults : '-';
    const newCases = data.positiveIncrease ? data.positiveIncrease : '-';
    const newDeaths = data.deathIncrease ? data.deathIncrease : '-';
    const dataDate = data.date ? data.date : '';


    return (
        <div>
             <h1>Current Totals</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>New Cases</th>
                        <th>New Deaths</th>
                        <th>Current Critical</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Total Tested</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{newCases}</td>
                        <td>{newDeaths}</td>
                        <td>{currentCritical}</td>
                        <td>{totalConfirmedCases}</td>
                        <td>{totalDeaths}</td>
                        <td>{totalTested}</td>
                        <td>{totalRecovered}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CurrentSummaryTable;
