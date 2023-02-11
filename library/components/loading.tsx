import { Component } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

/**
 * Render a fullscreen spinner.
 */
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <FontAwesomeIcon icon={faCircleNotch} spin />
      </div>
    );
  }
}
