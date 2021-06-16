import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

class Bayes extends Component {
  state = {
    attacks: [],
    showPostModal: false,
    country: "",
    industry: "",
    numberOfEmployees: "",
    os: "",
    typeOfDataLost: "",
    securityControl: "",
    itDepartment: "",
    systemAge: "",
    internationalCompany: "",
    staticIp: "",
  };

  render() {
    debugger;
    return (
      <React.Fragment>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Country:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.country}
                class="form-control"
                onChange={this.handleChange}
                name="country"
              >
                <option value=""> </option>
                <option value="0">France</option>
                <option value="1">Germany</option>
                <option value="2">UK</option>
                <option value="3">Australia</option>
                <option value="4">USA</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Industry:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.industry}
                class="form-control"
                onChange={this.handleChange}
                name="industry"
              >
                <option value=""> </option>
                <option value="0">Health</option>
                <option value="1">Educational</option>
                <option value="2">Shopping</option>
                <option value="3">Technology</option>
                <option value="4">Buisness</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Number Of Employees:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.likelihoodOfAttack}
                class="form-control"
                onChange={this.handleChange}
                name="likelihoodOfAttack"
              >
                <option value=""> </option>
                <option value="0">1-250</option>
                <option value="1">251-500</option>
                <option value="2">501-750</option>
                <option value="3">750+</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">OS:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.os}
                class="form-control"
                onChange={this.handleChange}
                name="os"
              >
                <option value=""> </option>
                <option value="0">Windows</option>
                <option value="1">Linux</option>
                <option value="2">MacOS</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Type of data lost:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.typeOfDataLost}
                class="form-control"
                onChange={this.handleChange}
                name="typeOfDataLost"
              >
                <option value=""> </option>
                <option value="0">Personally identifiable information</option>
                <option value="1">Personal financial information</option>
                <option value="2">Personal health information</option>
                <option value="3">Other information</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Likelihood of attack:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.likelihoodOfAttack}
                class="form-control"
                onChange={this.handleChange}
                name="likelihoodOfAttack"
              >
                <option value=""> </option>
                <option value="unkown">Unkown</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right" }} className="mt-5 pb-5 w-100">
          <button
            className="btn btn-primary btn-lg btn-block w-100"
            onClick={() => {
              this.generate();
            }}
          >
            Generate
          </button>
        </div>
      </React.Fragment>
    );
  }

  async generate() {}

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    debugger;
    this.setState({
      [name]: value,
    });
  };
}

const mapStateToProps = (state) => ({});

export default compose(withRouter, connect(mapStateToProps, {}))(Bayes);
