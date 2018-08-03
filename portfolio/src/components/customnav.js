import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Index from "../pages/index";
import About from "../pages/about";
import "../styles/customnav.css";

class customnav extends Component {
  render() {
    return (
      <Router>
        <nav className="stroke">
          <div>
            <ul className="menu">
              <NavLink className="branding" to="/">
                GR
                </NavLink>
              <li>
                <NavLink className="menu-item" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-item" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-item" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </nav>
      </Router>
    );
  }
}

export default customnav;
