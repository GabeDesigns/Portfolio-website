import React, { Component } from 'react';
import './styles/App.css';
import Particles from 'react-particles-js';
import particleOpt from './components/particlesOptions'


class App extends Component {
  render() {
    return (
      <div>
        <Particles canvasClassName="particles" params={particleOpt} />
      </div>
    );
  }
}

export default App;
