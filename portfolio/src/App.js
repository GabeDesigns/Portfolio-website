import React, { Component } from "react";

import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Index from "./pages/index";
import Background from "./components/background";

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Index />
        <Contact />
        <Portfolio />
      </div>
    );
  }
}

export default App;
