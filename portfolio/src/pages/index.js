import React, { Component } from "react";
import "../styles/index.css";
import About from './about';

export class index extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-name">Gabriel Rosales</div>
        <div className="tagline">
          Full Stack Dev | Open-Source Enthusiast | Designer
          </div>
      </div>
    );
  }
}

export default index;
