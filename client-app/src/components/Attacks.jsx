import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import CreateNewAttackModal from "./CreateNewAttackModal";
import { getAttacks, deleteAttack } from "../actions/actions";
import EditAttackModal from "./EditAttackModal";
import StateManager from "react-select";

class Attacks extends Component {
  state = {
    showPostModal: false,
    showEditModal: false,
    attackToEdit: {},
  };

  async componentDidMount() {
    debugger;
    await this.props.getAttacks();
  }

  render() {
    if (this.props.attacks === undefined) {
      return null;
    }
    debugger;
    return (
      <div>
        {this.state.showPostModal ? (
          <CreateNewAttackModal
            show={this.state.showPostModal}
            onShowChange={this.displayModalPost.bind(this)}
          />
        ) : null}
        {this.state.showEditModal ? (
          <EditAttackModal
            show={this.state.showEditModal}
            attack={this.state.attackToEdit}
            onShowChange={this.displayModalEdit.bind(this)}
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
              <div
                style={{
                  maxHeight: "1600px",
                  overflowY: "auto",
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
                      <th style={{ textAlign: "center" }}>Edit</th>
                      <th style={{ textAlign: "center" }}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.attacks.map((f) => (
                      <tr>
                        <td style={{ textAlign: "center" }}>{f.attack}</td>
                        <td style={{ textAlign: "center" }}>
                          {f.likelihood_of_attack}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {f.typical_severity}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {f.prerequisites}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {f.availability}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {f.confidentiality}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {f.confidentiality_access_control_authorization}
                        </td>
                        <td style={{ textAlign: "center" }}>{f.mitigations}</td>
                        <td style={{ textAlign: "center" }}>
                          <img
                            onClick={() => {
                              this.edit(f);
                            }}
                            src="/images/edit.png"
                          />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <img
                            onClick={() => {
                              this.delete(f);
                            }}
                            src="/images/trash.png"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  edit(attack) {
    this.setState({
      attackToEdit: attack,
    });
    this.displayModalEdit();
  }

  async delete(attack) {
    debugger;
    await this.props.deleteAttack(attack);
    window.location = "/";
  }

  displayModalPost() {
    this.setState({
      showPostModal: !this.state.showPostModal,
    });
  }

  displayModalEdit() {
    this.setState({
      showEditModal: !this.state.showEditModal,
    });
  }
}

const mapStateToProps = (state) => ({
  attacks: state.attacks,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getAttacks, deleteAttack })
)(Attacks);
