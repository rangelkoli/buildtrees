import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
function Navigation() {
  return (
    <div className="navigation" id="navbar">
      <nav className="navbar navbar-expand navbar-dark bg-">
        <div className="container">
          
          <NavLink className="navbar-brand" to="/">
            <h1>Build Trees</h1>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Donate">
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      

    </div>
  );
}

export default Navigation;