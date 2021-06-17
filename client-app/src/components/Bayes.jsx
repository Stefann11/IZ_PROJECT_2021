import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getBayes } from "../actions/actions";
import BayesAttacksModal from "./BayesAttacksModal";

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
        {this.state.showPostModal ? (
          <BayesAttacksModal
            show={this.state.showPostModal}
            attacks={this.state.attacks}
            onShowChange={this.displayModalPost.bind(this)}
          />
        ) : null}
        <h3 className="mt-4" style={{ textAlign: "center" }}>
          Choose characteristics
        </h3>
        <hr />
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
                value={this.state.numberOfEmployees}
                class="form-control"
                onChange={this.handleChange}
                name="numberOfEmployees"
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
              <label for="lastName">Security control:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.securityControl}
                class="form-control"
                onChange={this.handleChange}
                name="securityControl"
              >
                <option value=""> </option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">IT department:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.itDepartment}
                class="form-control"
                onChange={this.handleChange}
                name="itDepartment"
              >
                <option value=""> </option>
                <option value="0">Exists</option>
                <option value="1">Doesn't exist</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">System age:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.systemAge}
                class="form-control"
                onChange={this.handleChange}
                name="systemAge"
              >
                <option value=""> </option>
                <option value="0">{"<5"}</option>
                <option value="1">5+</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">International company:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.internationalCompany}
                class="form-control"
                onChange={this.handleChange}
                name="internationalCompany"
              >
                <option value=""> </option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Static IP:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.staticIp}
                class="form-control"
                onChange={this.handleChange}
                name="staticIp"
              >
                <option value=""> </option>
                <option value="0">Yes</option>
                <option value="1">No</option>
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

  displayModalPost(attacks) {
    debugger;
    this.setState({
      attacks: attacks,
      showPostModal: !this.state.showPostModal,
    });
  }

  async generate() {
    debugger;
    const parameters = {
      country: this.state.country,
      industry: this.state.industry,
      numberOfEmployees: this.state.numberOfEmployees,
      os: this.state.os,
      typeOfDataLost: this.state.typeOfDataLost,
      securityControl: this.state.securityControl,
      itDepartment: this.state.itDepartment,
      systemAge: this.state.systemAge,
      internationalCompany: this.state.internationalCompany,
      staticIp: this.state.staticIp,
    };
    await this.props.getBayes(parameters);
    this.displayModalPost(this.props.bayes);
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    debugger;
    this.setState({
      [name]: value,
    });
  };
}

const mapStateToProps = (state) => ({ bayes: state.bayes });

export default compose(
  withRouter,
  connect(mapStateToProps, { getBayes })
)(Bayes);
