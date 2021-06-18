import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <NavigationBar />
        <hr />
      </header>
    );
  }
}

export default Header;
