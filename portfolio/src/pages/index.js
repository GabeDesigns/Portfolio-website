import React, { Component } from "react";
import "../styles/index.css";
import stacklogo from "../components/st.png";
import linklogo from "../components/linked.png";
import gitlogo from "../components/git.png";

export class index extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-name">Gabriel Rosales</div>
        <div className="tagline">
          Full Stack Dev | Open-Source Enthusiast | Designer
          </div>
        <a href="https://stackoverflow.com/users/7490081/g-rose"><img src={stacklogo} /></a>
        <a href="https://linkedin.com/in/gabriel-rosales"><img src={linklogo} /></a>
        <a href="https://github.com/GabeDesigns"><img src={gitlogo} /></a>
      </div>
    );
  }
}

export default index;
