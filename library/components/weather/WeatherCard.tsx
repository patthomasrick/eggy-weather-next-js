import React from "react";
import { Component } from "react";
import { Period } from "../../types/Forecast";
import WeatherPeriod from "./WeatherPeriod";

export default class WeatherCard extends Component<{ periods: Period[] }> {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {this.props.periods.map((period) => {
            return (
              <WeatherPeriod
                key={`period-${period.startTime}`}
                period={period}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
