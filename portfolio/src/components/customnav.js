import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Contact from './contact';
import Portfolio from './portfolio';
import Index from './index';

class customnav extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                    </div>

                </div>
            </HashRouter >
        )
    }
};

export default customnav;
