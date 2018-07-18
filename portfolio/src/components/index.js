import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particleOpt from './particlesOptions';
import '../styles/background.css';
import Navbar from './customnav';
export class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Particles canvasClassName="particles" params={particleOpt} />
            </div>
        )
    }
}

export default index
