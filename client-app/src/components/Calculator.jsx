import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSeverityScore } from "../actions/actions";

class Calculator extends Component {
  state = {
    score: 0,
    attackVector: "",
    attackComplexity: "",
    privilegesRequired: "",
    userInteraction: "",
    scope: "",
    confidentiality: "",
    integrity: "",
    availability: "",
    exploitCodeMaturity: "",
    remediationLevel: "",
    reportConfidence: "",
  };

  render() {
    debugger;
    return (
      <React.Fragment>
        <h3 className="mt-4">Severity score</h3>
        <hr />
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Attack vector (AV)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.attackVector}
                class="form-control"
                onChange={this.handleChange}
                name="attackVector"
              >
                <option value=""> </option>
                <option value="0.85">Network (N)</option>
                <option value="0.62">Adjacent (A)</option>
                <option value="0.55">Local (L)</option>
                <option value="0.2">Physical (P)</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Attack complexity (AC)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.attackComplexity}
                class="form-control"
                onChange={this.handleChange}
                name="attackComplexity"
              >
                <option value=""> </option>
                <option value="0.77">Low</option>
                <option value="0.44">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Privileges Required (PR)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.privilegesRequired}
                class="form-control"
                onChange={this.handleChange}
                name="privilegesRequired"
              >
                <option value=""> </option>
                <option value="0.85">None (N)</option>
                <option value="0.62">Low (L)</option>
                <option value="0.27">High (H)</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">User Interaction (UI):</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.userInteraction}
                class="form-control"
                onChange={this.handleChange}
                name="userInteraction"
              >
                <option value=""> </option>
                <option value="0.85">None (N)</option>
                <option value="0.62">Required (R)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Scope (S)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.scope}
                class="form-control"
                onChange={this.handleChange}
                name="scope"
              >
                <option value=""> </option>
                <option value="0.5">Unchanged (U)</option>
                <option value="1.0">Changed (C)</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Confidentiality (C)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.confidentiality}
                class="form-control"
                onChange={this.handleChange}
                name="confidentiality"
              >
                <option value=""> </option>
                <option value="0.0">None (N)</option>
                <option value="0.22">Low (L)</option>
                <option value="0.56">High (H)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Integrity (I)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.integrity}
                class="form-control"
                onChange={this.handleChange}
                name="integrity"
              >
                <option value=""> </option>
                <option value="0.0">None (N)</option>
                <option value="0.22">Low (L)</option>
                <option value="0.56">High (H)</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Availability (A)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.availability}
                class="form-control"
                onChange={this.handleChange}
                name="availability"
              >
                <option value=""> </option>
                <option value="0.0">None (N)</option>
                <option value="0.22">Low (L)</option>
                <option value="0.56">High (H)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Exploit Code Maturity (E)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.exploitCodeMaturity}
                class="form-control"
                onChange={this.handleChange}
                name="exploitCodeMaturity"
              >
                <option value=""> </option>
                <option value="1.0">Not Defined (X)</option>
                <option value="0.91">Unproven (U)</option>
                <option value="0.94">Proof-Of-Concept (P)</option>
                <option value="0.97">Functional (F)</option>
                <option value="0.99">High (H)</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Remediation Level (RL)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.remediationLevel}
                class="form-control"
                onChange={this.handleChange}
                name="remediationLevel"
              >
                <option value=""> </option>
                <option value="1.0">Not Defined (X)</option>
                <option value="0.95">Official Fix (O)</option>
                <option value="0.96">Temporary Fix (T)</option>
                <option value="0.97">Workaround (W)</option>
                <option value="0.99">Unavailable (U)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Report Confidence (RC)</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.reportConfidence}
                class="form-control"
                onChange={this.handleChange}
                name="reportConfidence"
              >
                <option value=""> </option>
                <option value="1.0">Not Defined (X)</option>
                <option value="0.92">Unknown (U)</option>
                <option value="0.96">Reasonable (R)</option>
                <option value="0.99">Confirmed (C)</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right" }} className="mt-5 pb-5 w-100">
          <button
            className="btn btn-primary btn-lg btn-block w-100"
            disabled={
              this.state.attackVector === "" ||
              this.state.attackComplexity === "" ||
              this.state.privilegesRequired === "" ||
              this.state.userInteraction === "" ||
              this.state.scope === "" ||
              this.state.confidentiality === "" ||
              this.state.integrity === "" ||
              this.state.availability === "" ||
              this.state.exploitCodeMaturity === "" ||
              this.state.remediationLevel === "" ||
              this.state.reportConfidence === ""
            }
            onClick={() => {
              this.generate();
            }}
          >
            Generate
          </button>
        </div>
        <div style={{ textAlign: "center" }} className="pb-5">
          <button
            style={{ width: 300 }}
            className={
              this.state.score === 0
                ? "btn btn-secondary btn-lg btn-block"
                : this.state.score < 4
                ? "btn btn-success btn-lg btn-block"
                : this.state.score < 8
                ? "btn btn-warning btn-lg btn-block "
                : "btn btn-danger btn-lg btn-block "
            }
          >
            <label>
              {this.state.score.toFixed(2)} <br /> ({" "}
              {this.state.score === 0
                ? "None"
                : this.state.score < 4
                ? "Low"
                : this.state.score < 8
                ? "Medium"
                : "High"}
              )
            </label>
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
    const parameters = {
      attackComplexity: this.state.attackComplexity,
      attackVector: this.state.attackVector,
      availability: this.state.availability,
      confidentiality: this.state.confidentiality,
      exploitCodeMaturity: this.state.exploitCodeMaturity,
      integrity: this.state.integrity,
      privilegesRequired: this.state.privilegesRequired,
      remediationLevel: this.state.remediationLevel,
      reportConfidence: this.state.reportConfidence,
      scope: this.state.scope,
      userInteraction: this.state.userInteraction,
    };
    await this.props.getSeverityScore(parameters);
    this.setState({
      score: this.props.severityScore,
    });
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    debugger;
    this.setState({
      [name]: value,
    });
  };
}

const mapStateToProps = (state) => ({ severityScore: state.severityScore });

export default compose(
  withRouter,
  connect(mapStateToProps, { getSeverityScore })
)(Calculator);
