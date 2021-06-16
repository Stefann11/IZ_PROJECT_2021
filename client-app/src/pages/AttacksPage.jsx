import React, { Component } from "react";
import Attacks from "../components/Attacks";
import Layout from "../layouts/Layout";

class AttacksPage extends Component {
  render() {
    return (
      <Layout>
        <Attacks />
      </Layout>
    );
  }
}

export default AttacksPage;
