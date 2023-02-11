import Link from "next/link";
import React from "react";
import { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link href="/" className="navbar-item">
              🌤️
            </Link>
            <div className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="https://patrickwthomas.net">
                  About me
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
