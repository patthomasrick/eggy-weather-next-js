import Head from "next/head";
import { Component } from "react";

export default class Header extends Component<{ title: string }> {
  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
      </Head>
    );
  }
}
