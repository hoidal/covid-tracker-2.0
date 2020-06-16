import React, { Component } from 'react'

const nationalCurrentSummaryURL = 'https://covidtracking.com/api/v1/us/current.json';
const nationalHistoricalDataURL = 'https://covidtracking.com/api/v1/us/daily.json';
const stateCurrentSummaryURL = 'https://covidtracking.com/api/v1/states/current.json';

class NationalSummaryPage extends Component {

    state = {
        nationalCurrentDataSummary: {},
        nationalHistoricalDataSummary: [],
        stateCurrentDataSummary: []
    }

    componentDidMount() {
        Promise.all([
            fetch(nationalCurrentSummaryURL),
            fetch(nationalHistoricalDataURL),
            fetch(stateCurrentSummaryURL)
        ])
        .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
        .then(([data1, data2, data3]) => this.setState({
            nationalCurrentDataSummary: data1[0],
            nationalHistoricalDataSummary: data2,
            stateCurrentDataSummary: data3
        }))
    }

    render() {
        console.log(this.state)
        return (
            <div>
            </div>
        )
    }
}

export default NationalSummaryPage;
