import React, { Component } from 'react';
import Background from './components/background';
import Navbar from './components/customnav';

class App extends Component {

  render() {
    return (
      <div>
        <Background />
        <Navbar />
      </div>
    );
  }
}

export default App;
