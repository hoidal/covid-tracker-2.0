import React, { Component } from 'react'
import { getStateAbbr, getStateName } from '../helper-functions/formatters';

import StateHeader from '../components/StateHeader';
import CurrentSummaryTable from '../components/CurrentSummaryTable';
import SummaryCharts from '../components/SummaryCharts';


class StateHomePage extends Component {

    state = {
        stateName: '',
        stateCurrentSummaryData: {},
        stateHistoricalDataSummary: [],
        stateMetaData: {}
    };

    componentDidMount() {
        const state = getStateAbbr(this.props.match.params.stateName);

        Promise.all([
            fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`),
            fetch(`https://covidtracking.com/api/v1/states/${state}/daily.json`),
            fetch(`https://covidtracking.com/api/v1/states/${state}/info.json`)
        ])
        .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
        .then(([data1, data2, data3]) => this.setState({
            stateName: getStateName(state.toUpperCase()),
            stateCurrentSummaryData: data1,
            stateHistoricalDataSummary: data2,
            stateMetaData: data3
        }))
    }

    render() {
        console.log(this.state.stateMetaData)
        return (
            <div>
                <StateHeader state={this.state.stateName} info={this.state.stateMetaData}/>
                <CurrentSummaryTable data={this.state.stateCurrentSummaryData} />
                <SummaryCharts data={this.state.stateHistoricalDataSummary} />
            </div>
        )
    }
}

export default StateHomePage;
