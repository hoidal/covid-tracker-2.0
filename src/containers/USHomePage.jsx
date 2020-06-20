import React, { Component } from 'react';

import CurrentSummaryTable from '../components/CurrentSummaryTable';
import SummaryCharts from '../components/SummaryCharts';
import StateDataTable from '../components/StateDataTable';
import NewsContainer from '../components/NewsContainer';

const US_COVID_SUMMARY_URL = 'https://covidtracking.com/api/v1/us/current.json';
const US_DAILY_COVID_URL = 'https://covidtracking.com/api/v1/us/daily.json';
const STATE_COVID_SUMMARY_URL = 'https://covidtracking.com/api/v1/states/current.json';
const COVID_NEWS_URL = 'https://api.smartable.ai/coronavirus/news/US';

const NEWS_API_HEADER = {
    headers: {
      'Subscription-Key': 'a3d734750927483ea4040506f463681e'
    },
};

class NationalSummaryPage extends Component {

    state = {
        nationalCurrentDataSummary: {},
        nationalHistoricalDataSummary: [],
        stateCurrentDataSummary: [],
        newsData: {}
    }

    componentDidMount() {
        Promise.all([
            fetch(US_COVID_SUMMARY_URL),
            fetch(US_DAILY_COVID_URL),
            fetch(STATE_COVID_SUMMARY_URL),
            fetch(COVID_NEWS_URL, NEWS_API_HEADER)
        ])
        .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([data1, data2, data3, data4]) => this.setState({
            nationalCurrentDataSummary: data1[0],
            nationalHistoricalDataSummary: data2,
            stateCurrentDataSummary: data3,
            newsData: data4
        }))
    }

    render() {
        return (
            <div>
                 <div style={{height: '4rem', padding: '1rem'}}>
                    <h2>U.S. COVID-19 Data</h2>
                </div>
                <CurrentSummaryTable data={this.state.nationalCurrentDataSummary} />
                <SummaryCharts data={this.state.nationalHistoricalDataSummary.reverse()} />
                <StateDataTable data={this.state.stateCurrentDataSummary} />
                <NewsContainer data={this.state.newsData} />
            </div>
        )
    }
}

export default NationalSummaryPage;
