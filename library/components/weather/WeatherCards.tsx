import React from "react";
import { useEffect } from "react";
import { Component } from "react";
import { Period } from "../../types/Forecast";
import { WeatherContext } from "../../Context";
import WeatherCard from "./WeatherCard";

const DAY_IN_MILLISECONDS = 86400000;
const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60000;

export default class WeatherCards extends Component<{}> {
  static contextType = WeatherContext;
  declare context: React.ContextType<typeof WeatherContext>;

  render() {
    // Group periods by day.
    const days = this.context.data?.properties.periods.reduce(
      (days, period) => {
        let startDay = Math.round(
          (Date.parse(period.startTime) + TIMEZONE_OFFSET) / DAY_IN_MILLISECONDS
        );

        const day = days[days.length - 1];
        if (
          day &&
          Math.round(
            (Date.parse(day[0].startTime) + TIMEZONE_OFFSET) /
              DAY_IN_MILLISECONDS
          ) === startDay
        ) {
          day.push(period);
        } else {
          days.push([period]);
        }

        return days;
      },
      [] as Period[][]
    );

    return (
      <div className="columns">
        {days?.map((periods) => {
          return (
            <div className="column" key={`periods-${periods[0].startTime}`}>
              <WeatherCard periods={periods} />
            </div>
          );
        })}
      </div>
    );
  }
}
