import React from "react";
import { Component } from "react";
import { Period } from "../../types/Forecast";

export default class WeatherPeriod extends Component<{ period: Period }> {
  render() {
    return (
      <div className="content">
        <p>
          <b>{this.props.period.name}</b>
        </p>
        <p>
          {this.props.period.temperature}° {this.props.period.temperatureUnit}
        </p>
        <p>{this.props.period.shortForecast}</p>
      </div>
    );
  }
}
