import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="pt-4 w-100">
        <NavigationBar />
        <hr />
      </header>
    );
  }
}

export default Header;
