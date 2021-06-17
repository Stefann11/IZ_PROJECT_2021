import React, { Component } from "react";
import Calculator from "../components/Calculator";
import Layout from "../layouts/Layout";

class CalculatorPage extends Component {
  render() {
    return (
      <Layout>
        <Calculator />
      </Layout>
    );
  }
}

export default CalculatorPage;
