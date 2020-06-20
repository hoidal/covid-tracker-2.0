import React, { Component } from 'react'
import { getStateAbbr, getStateName } from '../helper-functions/formatters';

import StateHeader from '../components/StateHeader';
import CurrentSummaryTable from '../components/CurrentSummaryTable';
import SummaryCharts from '../components/SummaryCharts';
import NewsContainer from '../components/NewsContainer';


class StateHomePage extends Component {

    state = {
        stateName: '',
        stateCurrentSummaryData: {},
        stateHistoricalDataSummary: [],
        stateMetaData: {},
        newsData: {}
    };

    componentDidMount() {
        const state = getStateAbbr(this.props.match.params.stateName);
        const newsApiHeader = {
            headers: {
              'Subscription-Key': 'a3d734750927483ea4040506f463681e'
            },
        };

        Promise.all([
            fetch(`https://covidtracking.com/api/v1/states/${state}/current.json`),
            fetch(`https://covidtracking.com/api/v1/states/${state}/daily.json`),
            fetch(`https://covidtracking.com/api/v1/states/${state}/info.json`),
            fetch(`https://api.smartable.ai/coronavirus/news/US-${state.toUpperCase()}`, newsApiHeader)
        ])
        .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([data1, data2, data3, data4]) => this.setState({
            stateName: getStateName(state.toUpperCase()),
            stateCurrentSummaryData: data1,
            stateHistoricalDataSummary: data2,
            stateMetaData: data3,
            newsData: data4
        }))
    }

    render() {
        return (
            <div>
                <StateHeader stateName={this.state.stateName} info={this.state.stateMetaData} />
                <CurrentSummaryTable data={this.state.stateCurrentSummaryData} />
                <SummaryCharts data={this.state.stateHistoricalDataSummary.sort((a, b) => a.date - b.date)} />
                <NewsContainer data={this.state.newsData} />
            </div>
        )
    }
}

export default StateHomePage;
