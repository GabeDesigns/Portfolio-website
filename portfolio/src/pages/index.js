import React, { Component } from "react";
import Particles from "react-particles-js";
import particleOpt from "../components/particlesOptions";
import "../styles/background.css";
import Navbar from "../components/customnav";
export class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Particles className="particles" params={particleOpt} />
      </div>
    );
  }
}

export default index;
