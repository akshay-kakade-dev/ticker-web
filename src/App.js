import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LineChartContainer from './containers/LineChartContainer'

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <Route
          exact
          path="/stock_chart"
          component={LineChartContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ notification }) => ({ ...notification });

export default connect(
  mapStateToProps
)(App);