import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class Attacks extends Component {
  state = {};

  componentDidMount() {
    debugger;
  }

  render() {
    debugger;
    return (
      <div>
        <div className="wrap bg-white pt-3 pb-3" style={{ height: "100vh" }}>
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
                    <th style={{ textAlign: "center" }}>Confidentialityy</th>
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
}

const mapStateToProps = (state) => ({});

export default compose(withRouter, connect(mapStateToProps, {}))(Attacks);
