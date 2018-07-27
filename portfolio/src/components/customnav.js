import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Index from "../pages/index";
import "../styles/customnav.css";

class customnav extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="stroke">
          <div>
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
          </div>
          <Route exact path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </nav>

      </BrowserRouter>
    );
  }
}

export default customnav;
