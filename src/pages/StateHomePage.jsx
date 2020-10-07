import React, { Component, Fragment } from "react";
import StateHeader from "../components/state-header/StateHeader";
import SummaryTable from "../components/summary-table/SummaryTable";
import DataCharts from "../components/data-chart/DataCharts";

import { getStateAbbr, getStateName } from "../util/formatters";

class StateHomePage extends Component {
  state = {
    stateName: "",
    stateCurrentSummaryData: {},
    stateHistoricalDataSummary: [],
    stateMetaData: {},
  };

  componentDidMount() {
    const state = getStateAbbr(this.props.match.params.stateName);

    Promise.all([
      fetch(`https://api.covidtracking.com/v1/states/${state}/current.json`),
      fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`),
      fetch(`https://api.covidtracking.com/v1/states/${state}/info.json`),
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
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <StateHeader
          stateName={this.state.stateName}
          info={this.state.stateMetaData}
        />
        <SummaryTable data={this.state.stateCurrentSummaryData} />
        <DataCharts
          data={this.state.stateHistoricalDataSummary.sort(
            (a, b) => a.date - b.date
          )}
        />
      </Fragment>
    );
  }
}

export default StateHomePage;
