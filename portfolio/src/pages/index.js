import React, { Component } from "react";
import "../styles/background.css";
import Navbar from "../components/customnav";

export class index extends Component {
  render() {
    return (
      <div className="index-page">
        <Navbar />
        <div className="intro-wrapper">
          <div className="intro-name">Gabriel Rosales</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | Designer
          </div>
        </div>
      </div>
    );
  }
}

export default index;
