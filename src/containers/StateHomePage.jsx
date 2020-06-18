import React, { Component } from 'react'
import { getStateAbbr, getStateName } from '../helper-functions/formatters';

import CurrentSummaryTable from '../components/CurrentSummaryTable';
import SummaryCharts from '../components/SummaryCharts';


class StateHomePage extends Component {

    state = {
        stateName: '',
        stateCurrentSummaryData: {},
        stateHistoricalDataSummary: []
    };

    componentDidMount() {
        const state = getStateAbbr(this.props.match.params.stateName);
        // fetch(`https://covidtracking.com/api/v1/states/${state}/daily.json`)
        // .then(response => response.json())
        // .then(data => this.setState({stateHistoricalDataSummary: data}))
        // fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`)
        // .then(response => response.json())
        // .then(console.log)
        // fetch(`https://covidtracking.com/api/v1/states/${state}/info.json`)
        // .then(response => response.json())
        // .then(console.log)

        Promise.all([
            fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`),
            fetch(`https://covidtracking.com/api/v1/states/${state}/daily.json`)
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            stateName: getStateName(state.toUpperCase()),
            stateCurrentSummaryData: data1,
            stateHistoricalDataSummary: data2
        }))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div style={{height: '4rem', padding: '1rem'}}>
                    <h2>{this.state.stateName}</h2>
                </div>
                <CurrentSummaryTable data={this.state.stateCurrentSummaryData} />
                <SummaryCharts data={this.state.stateHistoricalDataSummary} />
            </div>
        )
    }
}

export default StateHomePage;
