import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../css/nav.css";

class NavigationBar extends Component {
  state = {};

  render() {
    const NavBar = () => {
      return (
        <Nav
          className="navbar navbar-light pl-5 pr-5"
          style={{ backgroundColor: "#e3f2fd", textDecoration: "none" }}
        >
          <NavItem>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Attacks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/cbr"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Case Base Reasoning
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to="/bayes"
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Bayes Reasoning
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              exact
              to={"/calculator"}
              className="nav-link"
              activeClassName="nav-link-active"
            >
              Vulnerability Calculator
            </NavLink>
          </NavItem>
        </Nav>
      );
    };
    return <NavBar />;
  }
}

export default withRouter(NavigationBar);
