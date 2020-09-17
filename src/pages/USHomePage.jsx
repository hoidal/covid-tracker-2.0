import React, { Component, Fragment } from "react";
import styles from "./USHomePage.module.css";

import SummaryTable from "../components/summary-table/SummaryTable";
import DataCharts from "../components/data-chart/DataCharts";
import StateDataTable from "../components/data-table/StateDataTable";
import NewsContainer from "../components/new-container/NewsContainer";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const US_COVID_SUMMARY_URL = "https://covidtracking.com/api/v1/us/current.json";
const US_DAILY_COVID_URL = "https://covidtracking.com/api/v1/us/daily.json";
const STATE_COVID_SUMMARY_URL =
  "https://covidtracking.com/api/v1/states/current.json";
const COVID_NEWS_URL =
  "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/";

const NEWS_API_HEADER = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
    "x-rapidapi-key": "12a72ce0f2msh0976a364b297dc5p16772fjsn899b3a1eec06",
  },
};

class NationalSummaryPage extends Component {
  state = {
    nationalCurrentDataSummary: {},
    nationalHistoricalDataSummary: [],
    stateCurrentDataSummary: [],
    newsData: {},
  };

  componentDidMount() {
    Promise.all([
      fetch(PROXY_URL + US_COVID_SUMMARY_URL),
      fetch(PROXY_URL + US_DAILY_COVID_URL),
      fetch(PROXY_URL + STATE_COVID_SUMMARY_URL),
      fetch(COVID_NEWS_URL, NEWS_API_HEADER),
    ])
      .then(([res1, res2, res3, res4]) =>
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])
      )
      .then(([data1, data2, data3, data4]) =>
        this.setState({
          nationalCurrentDataSummary: data1[0],
          nationalHistoricalDataSummary: data2,
          stateCurrentDataSummary: data3,
          newsData: data4,
        })
      );
  }

  render() {
    console.log(this.state.newsData);
    return (
      <Fragment>
        <div className={styles.titleContainer}>
          <h2 className={styles.headerTitle}>U.S. COVID-19 Summary</h2>
          <a href="#newsSection">Recent COVID-19 News</a>
          <br />
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html">
            CDC Website
          </a>
        </div>
        <SummaryTable data={this.state.nationalCurrentDataSummary} />
        <DataCharts
          data={this.state.nationalHistoricalDataSummary.sort(
            (a, b) => a.date - b.date
          )}
        />
        <StateDataTable data={this.state.stateCurrentDataSummary} />
        <NewsContainer data={this.state.newsData} />
      </Fragment>
    );
  }
}

export default NationalSummaryPage;
