import React, { Component } from "react";
import Header from "../components/Common/Header";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
