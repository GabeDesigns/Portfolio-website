import React, { Component } from "react";
import { NavLink, Route } from 'react-router-dom';
import Background from "./components/background";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Index from "./pages/index";
import Menu from './components/menus';
import "./styles/customnav.css";

class App extends Component {

  render() {
    return (
      <div>
        <Background />
        <Menu>
          <nav className="stroke">
            <ul>
              <div className="menu bm-menu">
                <li>
                  <NavLink className="menu-item bm-item" to="/">
                    Home
                   </NavLink>
                </li>
                <li>
                  <NavLink className="menu-item bm-item" to="/portfolio">
                    Portfolio
                   </NavLink>
                </li>
                <li>
                  <NavLink className="menu-item bm-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </div>
            </ul>
          </nav>
          <Route exact path="/" component={Index} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Menu>
      </div>
    );
  }
}

export default App;
