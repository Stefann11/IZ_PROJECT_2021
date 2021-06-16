import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import MitigationsModal from "./MitigationsModal";

class CBRAttacksModal extends Component {
  state = {
    showPostModal: this.props.show,
    showMitigationsModal: false,
    mitigation: "",
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
          {this.state.showMitigationsModal ? (
            <MitigationsModal
              show={this.state.showMitigationsModal}
              mitigation={this.state.mitigation}
              onShowChange={this.displayModalPost.bind(this)}
            />
          ) : null}
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
                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          this.displayModalPost(f.mitigations);
                        }}
                        className="btn btn-primary mb-2"
                      >
                        Mitigations
                      </button>
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

  displayModalPost(mitigation) {
    debugger;
    this.setState({
      mitigation: mitigation,
      showMitigationsModal: !this.state.showMitigationsModal,
    });
  }

  toggle() {
    debugger;
    this.setState({ showPostModal: false });
    this.props.onShowChange();
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(CBRAttacksModal);
