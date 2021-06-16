import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class MitigationsModal extends Component {
  state = {
    showMitigationsModal: this.props.show,
  };

  render() {
    return (
      <Modal
        style={{
          maxWidth: "750px",
          width: "749px",
        }}
        isOpen={this.state.showMitigationsModal}
        centered={true}
      >
        <ModalHeader toggle={this.toggle.bind(this)}>Mitigations</ModalHeader>
        <ModalBody>
          <div>{this.props.mitigation}</div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }

  toggle() {
    debugger;
    this.setState({ showMitigationsModal: false });
    this.props.onShowChange();
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MitigationsModal);
