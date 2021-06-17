import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import CreateNewAttackModal from "./CreateNewAttackModal";

class Attacks extends Component {
  state = {
    showPostModal: false,
  };

  componentDidMount() {
    debugger;
  }

  render() {
    debugger;
    return (
      <div>
        {this.state.showPostModal ? (
          <CreateNewAttackModal
            show={this.state.showPostModal}
            onShowChange={this.displayModalPost.bind(this)}
          />
        ) : null}
        <h3 className="mt-4" style={{ textAlign: "center" }}>
          Attacks
        </h3>
        <hr />
        <div className="wrap bg-white pt-3 pb-3" style={{ height: "100vh" }}>
          <div style={{ textAlign: "right" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.displayModalPost();
              }}
            >
              Create new attack
            </button>
          </div>
          <div style={{ marginTop: "40px" }} id="appointmentTable">
            <Card
              className="mt-5"
              style={{
                shadowColor: "gray",
                boxShadow: "0 8px 6px -6px #999",
              }}
            >
              <Table className="table allPrescriptions mb-0" striped>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th style={{ textAlign: "center" }}>
                      Likelihood of attack
                    </th>
                    <th style={{ textAlign: "center" }}>Typical severity</th>
                    <th style={{ textAlign: "center" }}>Prerequisites</th>
                    <th style={{ textAlign: "center" }}>Availability</th>
                    <th style={{ textAlign: "center" }}>Confidentiality</th>
                    <th style={{ textAlign: "center" }}>
                      Confidentiality access control authorization
                    </th>
                    <th style={{ textAlign: "center" }}>Mitigations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accessing intercepting modifyingHTTPCookies</td>
                    <td>High</td>
                    <td>High</td>
                    <td>
                      Relies on cookies, cookie contains sensitive information,
                      response contains cookie
                    </td>
                    <td>None</td>
                    <td>Read data</td>
                    <td>Gain privileges</td>
                    <td>
                      Use input validation for cookies, generate and validate
                      MAC for cookies, use ssl/tls to protect cookie in transit,
                      web server implements all relevant security patches
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  displayModalPost() {
    this.setState({
      showPostModal: !this.state.showPostModal,
    });
  }
}

const mapStateToProps = (state) => ({});

export default compose(withRouter, connect(mapStateToProps, {}))(Attacks);
