import React from "react";
import { Component } from "react";
import { WeatherContext } from "../library/components/Context";
import Head from "../library/components/head";
import Loading from "../library/components/loading";
import NavBar from "../library/components/navbar";
import WeatherCards from "../library/components/weather/WeatherCards";

export default class Home extends Component {
  static contextType = WeatherContext;
  declare context: React.ContextType<typeof WeatherContext>;

  render() {
    return (
      <>
        <Head title="Weather" />
        <NavBar></NavBar>
        <section className="section">
          {this.context.loading ? (
            <Loading />
          ) : (
            <div className="container">
              <h1 className="title">Weather</h1>
              <div className="subtitle">Data from National Weather Service</div>
              <WeatherCards />
            </div>
          )}
        </section>
      </>
    );
  }
}
