import React, { Component } from "react";
import Navbar from './components/customnav';
import Background from "./components/background";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Background />


      </div>
    );
  }
}

export default App;
