import React, { Component, Fragment } from "react";
import StateHeader from "../components/state-header/StateHeader";
import SummaryTable from "../components/summary-table/SummaryTable";
import DataCharts from "../components/data-chart/DataCharts";
import NewsContainer from "../components/new-container/NewsContainer";

import { getStateAbbr, getStateName } from "../util/formatters";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

class StateHomePage extends Component {
  state = {
    stateName: "",
    stateCurrentSummaryData: {},
    stateHistoricalDataSummary: [],
    stateMetaData: {},
    newsData: {},
  };

  componentDidMount() {
    const state = getStateAbbr(this.props.match.params.stateName);
    const newsApiHeader = {
      headers: {
        "Subscription-Key": "a3d734750927483ea4040506f463681e",
      },
    };

    Promise.all([
      fetch(
        `${PROXY_URL}https://covidtracking.com/api/v1/states/${state}/current.json`
      ),
      fetch(
        `${PROXY_URL}https://covidtracking.com/api/v1/states/${state}/daily.json`
      ),
      fetch(
        `${PROXY_URL}https://covidtracking.com/api/v1/states/${state}/info.json`
      ),
    ])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) =>
        this.setState({
          stateName: getStateName(state.toUpperCase()),
          stateCurrentSummaryData: data1,
          stateHistoricalDataSummary: data2,
          stateMetaData: data3,
        })
      );
    fetch(
      `https://api.smartable.ai/coronavirus/news/US-${state.toUpperCase()}`,
      newsApiHeader
    )
      .then((res) => res.json())
      .then((data) => this.setState({ newsData: data }));
  }

  render() {
    const newsContainer = this.state.newsData.news ? (
      this.state.newsData.news.length === 0 ? null : (
        <NewsContainer data={this.state.newsData} />
      )
    ) : null;
    const hasLocalNews = this.state.newsData.location
      ? this.state.newsData.news
      : null;
    return (
      <Fragment>
        <StateHeader
          stateName={this.state.stateName}
          info={this.state.stateMetaData}
          news={hasLocalNews}
        />
        <SummaryTable data={this.state.stateCurrentSummaryData} />
        <DataCharts
          data={this.state.stateHistoricalDataSummary.sort(
            (a, b) => a.date - b.date
          )}
        />
        {newsContainer}
      </Fragment>
    );
  }
}

export default StateHomePage;
