import React, { Component, Fragment } from "react";
import styles from "./USHomePage.module.css";

import SummaryTable from "../components/summary-table/SummaryTable";
import DataCharts from "../components/data-chart/DataCharts";
import StateDataTable from "../components/data-table/StateDataTable";

const US_COVID_SUMMARY_URL = "https://api.covidtracking.com/v1/us/current.json";
const US_DAILY_COVID_URL = "https://api.covidtracking.com/v1/us/daily.json";
const STATE_COVID_SUMMARY_URL =
  "https://api.covidtracking.com/v1/states/current.json";

class NationalSummaryPage extends Component {
  state = {
    nationalCurrentDataSummary: {},
    nationalHistoricalDataSummary: [],
    stateCurrentDataSummary: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(US_COVID_SUMMARY_URL),
      fetch(US_DAILY_COVID_URL),
      fetch(STATE_COVID_SUMMARY_URL),
    ])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) =>
        this.setState({
          nationalCurrentDataSummary: data1[0],
          nationalHistoricalDataSummary: data2,
          stateCurrentDataSummary: data3,
        })
      );
  }

  render() {
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
        {/* <NewsContainer data={this.state.newsData} /> */}
      </Fragment>
    );
  }
}

export default NationalSummaryPage;
