import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { Card } from "reactstrap";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";

class BayesAttacksModal extends Component {
  state = {
    showPostModal: this.props.show,
  };

  render() {
    return (
      <Modal
        style={{
          maxWidth: "750px",
          width: "749px",
        }}
        isOpen={this.state.showPostModal}
        centered={true}
      >
        <ModalHeader toggle={this.toggle.bind(this)}>
          Attacks overview
        </ModalHeader>
        <ModalBody>
          <Card
            className="mt-5"
            style={{ shadowColor: "gray", boxShadow: "0 8px 6px -6px #999" }}
          >
            <Table className="table allPrescriptions mb-0">
              <tbody>
                {this.props.attacks.map((f) => (
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <label>{f.attack}</label>
                    </td>
                    <td style={{ textAlign: "center", width: 400 }}>
                      <ProgressBar
                        className="ml-3"
                        now={(Math.round(f.eval * 100 * 100) / 100).toFixed(2)}
                        label={`${(
                          Math.round(f.eval * 100 * 100) / 100
                        ).toFixed(2)}%`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }

  toggle() {
    debugger;
    this.setState({ showPostModal: false });
    this.props.onShowChange();
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(BayesAttacksModal);
