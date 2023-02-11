import { Component } from "react";
import { WeatherContext } from "../library/components/context";
import Head from "../library/components/head";
import Loading from "../library/components/loading";
import NavBar from "../library/components/navbar";

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
              <h1 className="title">Hello World</h1>
              <div className="subtitle">
                <div>
                  <p>Loaded!</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </>
    );
  }
}