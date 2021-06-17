import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavigationBar extends Component {
  state = {};

  render() {
    const NavBar = () => {
      return (
        <React.Fragment w-100>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            onClick={() => {
              window.location = "/";
            }}
          >
            Attacks
          </NavLink>
          <span style={{ width: 25, display: "inline-block" }}></span>
          <NavLink
            exact
            to="/cbr"
            onClick={() => {
              window.location = "/cbr";
            }}
          >
            <button className="btn btn-success btn-block">
              Case Base Reasoning
            </button>
          </NavLink>
          <span style={{ width: 25, display: "inline-block" }}></span>
          <NavLink
            exact
            to="/bayes"
            onClick={() => {
              window.location = "/bayes";
            }}
          >
            <button className="btn btn-warning btn-block">
              Bayes Reasoning
            </button>
          </NavLink>
          <span style={{ width: 25, display: "inline-block" }}></span>
          <NavLink
            exact
            to={"/calculator"}
            onClick={() => {
              window.location = "/calculator";
            }}
          >
            <button className="btn btn-danger btn-block">
              Vulnerability Calculator
            </button>
          </NavLink>
        </React.Fragment>
      );
    };
    return <NavBar />;
  }
}

export default withRouter(NavigationBar);
