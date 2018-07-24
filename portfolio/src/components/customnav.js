import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Index from "../pages/index";
import "../styles/customnav.css";

class customnav extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="stroke">
            <ul className="menu">
              <li>
                <NavLink className="menu-item" to="/">
                  Home
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

            <Route exact path="/" component={Index} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />

          </nav>
        </div>
      </HashRouter>
    );
  }
}

export default customnav;
