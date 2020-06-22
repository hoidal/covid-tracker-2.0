import React, { Component, Fragment } from 'react';
import styles from './USHomePage.module.css';

import SummaryTable from '../components/SummaryTable';
import DataCharts from '../components/DataCharts';
import StateDataTable from '../components/StateDataTable';
import NewsContainer from '../components/NewsContainer';

const US_COVID_SUMMARY_URL = 'https://covidtracking.com/api/v1/us/current.json';
const US_DAILY_COVID_URL = 'https://covidtracking.com/api/v1/us/daily.json';
const STATE_COVID_SUMMARY_URL = 'https://covidtracking.com/api/v1/states/current.json';
const COVID_NEWS_URL = 'https://api.smartable.ai/coronavirus/news/US';

const NEWS_API_HEADER = {
    headers: {
      'Subscription-Key': 'a3d734750927483ea4040506f463681e'
    }
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
            <Fragment>
                <div className={styles.titleContainer}>
                    <h2>U.S. COVID-19 Summary</h2>
                    <a href="#newsSection">Recent COVID-19 News</a>
                </div>
                <SummaryTable data={this.state.nationalCurrentDataSummary} />
                <DataCharts data={this.state.nationalHistoricalDataSummary.sort((a, b) => a.date - b.date)} />
                <StateDataTable data={this.state.stateCurrentDataSummary} />
                <NewsContainer data={this.state.newsData} />
            </Fragment>
        )
    }
}

export default NationalSummaryPage;
