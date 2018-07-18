import React, { Component } from 'react';

import Navbar from './components/customnav';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Index, { index } from './components/index';
class App extends Component {
  render() {
    return (
      <div>
        <Index />
        <Contact />
        <Portfolio />

      </div>

    );
  }
}

export default App;
