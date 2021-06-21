import React, { Component } from "react";
import Header from "../components/Common/Header";

class Layout extends Component {
  componentDidMount() {
    document.title = "Inzenjering znanja";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="wrapper">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
