import Head from "next/head";
import { Component } from "react";
import { WeatherContext } from "./context";

/**
 * Render a fullscreen spinner.
 */
export default class Header extends Component<{ title: string }> {
  static contextType = WeatherContext;
  declare context: React.ContextType<typeof WeatherContext>;

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
      </Head>
    );
  }
}
