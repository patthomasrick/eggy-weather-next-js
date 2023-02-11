import { Component } from "react";
import { WeatherContext } from "../library/components/context";
import Head from "../library/components/head";
import Loading from "../library/components/loading";

export default class Home extends Component {
  static contextType = WeatherContext;
  declare context: React.ContextType<typeof WeatherContext>;

  render() {
    return (
      <>
        <Head title="Weather" />
        <section className="section">
          <div className="container">
            <h1 className="title">Hello World</h1>
            <div className="subtitle">
              <div>{this.context.loading ? <Loading /> : <p>Loaded!</p>}</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
