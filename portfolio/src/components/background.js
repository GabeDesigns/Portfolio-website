import React, { Component } from "react";
import Particles from "react-particles-js";
import particleOpt from "./particlesOptions";
import "../styles/background.css";

export class index extends Component {

  render() {
    return (
      <div>
        <Particles className="particles" params={particleOpt} />
      </div>
    );
  }
}

export default index;
