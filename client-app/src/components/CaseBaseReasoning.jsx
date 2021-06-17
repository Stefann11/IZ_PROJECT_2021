import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCbr } from "../actions/actions";
import CBRAttacksModal from "./CBRAttacksModal";

class CaseBaseReasoning extends Component {
  state = {
    attacks: [],
    showPostModal: false,
    likelihoodOfAttack: "",
    typicalSeverity: "",
    selectedPrerequisites: [],
    selectedAvailability: [],
    selectedConfidentiality: [],
    selectedConfidentialityAccessControlAuthorization: [],
    optionsConfidentialityAccessControlAuthorization: [
      { value: "gain_privileges", label: "Gain privileges" },
      { value: "none", label: "None" },
      {
        value: "bypass_protection_mechanism",
        label: "Bypass protection mechanism",
      },
      { value: "hide_activities", label: "Hide activities" },
    ],
    optionsConfidentiality: [
      { value: "read_data", label: "Read data" },
      { value: "none", label: "None" },
      { value: "other", label: "Other" },
      { value: "modify_data", label: "Modify data" },
    ],
    optionsAvailability: [
      { value: "none", label: "None" },
      { value: "unreliable_execution", label: "Unreliable execution" },
      { value: "other", label: "Other" },
      { value: "resource_consumption", label: "Resource consumption" },
      { value: "modify_data", label: "Modify data" },
    ],
    optionsPrerequisites: [
      { value: "relies_on_cookies", label: "Relies on cookies" },
      {
        value: "cookie_contains_sensitive_information",
        label: "Cookie contains sensitive information",
      },
      { value: "response_contains_cookie", label: "Response contains cookie" },
      {
        value:
          "opportunity_to_intercept_must_exist_beyond_the_point_where_SSL_is_terminated",
        label:
          "Opportunity to intercept must exist beyond the point where SSL is terminated",
      },
      {
        value:
          "attacker_can_insert_listener_in_the_client_server_communication_path",
        label:
          "Attacker can insert listener in the client server communication path",
      },
      {
        value:
          "attacker_must_be_placed_in_the_communication_path_between_client_and_server",
        label:
          "Attacker must be placed in the communication path between client and server",
      },
      {
        value:
          "targeted_application_must_receive_application_code_from_the_server",
        label:
          "Targeted application must receive application code from the server",
      },
      {
        value: "attacker_must_employ_sniffer_on_network_without_being_detected",
        label: "Attacker must employ sniffer on network without being detected",
      },
      {
        value:
          "target_communication_on_network_protocol_is_visible_by_network_sniffing_application",
        label:
          "Target communication on network protocol is visible by network sniffing application",
      },
      {
        value: "adversary_needs_logical_access_to_target_network",
        label: "Adversary needs logical access to target network",
      },
      {
        value: "none",
        label: "None",
      },
      {
        value: "adversary_must_place_malicious_code_on_target_device",
        label: "Adversary must place malicious code on target device",
      },
      {
        value: "attacker_knows_targets_phone_number",
        label: "Attacker knows targets phone number",
      },
      {
        value: "software_is_not_on_windows_XP_SP_2",
        label: "Software is not on windows XP SP 2",
      },
      {
        value:
          "linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets",
        label:
          "Linux and unix systems requires root privileges to use raw sockets",
      },
      {
        value: "adversary_needs_logical_access_to_the_target_network",
        label: "Adversary needs logical access to the target network",
      },
      {
        value: "fin_requires_use_of_raw_sockets",
        label: "Fin requires use of raw sockets",
      },
      {
        value: "requires_use_of_raw_sockets",
        label: "Requires use of raw sockets",
      },
      {
        value:
          "ability_to_send_UDP_datagrams_to_host_and_receive_ICMP_error_from_that_host",
        label:
          "Ability to send UDP datagrams to host and receive ICMP error from that host",
      },
      {
        value: "decrtypton_routine_does_not_work_propely",
        label: "Decrtypton routine does not work propely",
      },
      {
        value: "target_system_leaks_data",
        label: "Target system leaks data",
      },
      {
        value: "padding_oracle_remains_available_for_enough_time",
        label: "Padding oracle remains available for enough time",
      },
      {
        value:
          "adversary_must_be_aware_that_their_message_will_be_routed_using_CDN",
        label:
          "Adversary must be aware that their message will be routed using CDN",
      },
      {
        value:
          "adversary_must_have_control_of_router_that_manipulate_BGP_updates",
        label:
          "Adversary must have control of router that manipulate BGP updates",
      },
      {
        value:
          "attack_requires_knowladge_of_the_satellites_coordinates_for_targeting",
        label:
          "Attack requires knowladge of the satellites coordinates for targeting",
      },
      {
        value: "lack_of_anti_jam_features_in_802_11",
        label: "Lack of anti jam features in 802 11",
      },
      {
        value:
          "lack_of_authentication_on_deauthentication/disassociation_packets_on_802_11_based_networks",
        label:
          "Lack of authentication on deauthentication/disassociation packets on 802 11 based networks",
      },
      {
        value: "lack_of_anti_jam_features_in_cellular_technology",
        label: "Lack of anti jam features in cellular technology",
      },
      {
        value:
          "attack_requires_ability_to_conduct_deep_packet_inspection_with_an_InPath_device_that_can_drop_the_targeted_traffic_and/or_connection",
        label:
          "Attack requires ability to conduct deep packet inspection with an InPath device that can drop the targeted traffic and/or connection",
      },
      {
        value: "on/in_path_device",
        label: "On/in path device",
      },
      {
        value:
          "target_must_be_relying_on_valid_GPS_signal_to_preform_critical_operations",
        label:
          "Target must be relying on valid GPS signal to preform critical operations",
      },
      {
        value:
          "application_must_publicize_identifiable_information_about_system_or_application_through_voluntary_or_involuntary_means",
        label:
          "Application must publicize identifiable information about system or application through voluntary or involuntary means",
      },
      {
        value: "access_to_binary_executable",
        label: "Access to binary executable",
      },
      {
        value:
          "ability_to_observe_and_interact_with_communication_channel_between_communicating_processes",
        label:
          "Ability to observe and interact with communication channel between communicating processes",
      },
    ],
  };

  render() {
    debugger;
    return (
      <React.Fragment>
        {this.state.showPostModal ? (
          <CBRAttacksModal
            show={this.state.showPostModal}
            attacks={this.state.attacks}
            onShowChange={this.displayModalPost.bind(this)}
          />
        ) : null}
        <h3 className="mt-4" style={{ textAlign: "center" }}>
          Choose attacks characteristics
        </h3>
        <hr />
        <div className="mt-5">
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
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label> Prerequisites</label>
              <Multiselect
                style={{ outerWidth: 500 }}
                options={this.state.optionsPrerequisites} // Options to display in the dropdown
                selectedValues={this.state.selectedPrerequisites} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label for="lastName">Typical severity:</label>
              <select
                style={{ width: 500, maxWidth: 500 }}
                value={this.state.typicalSeverity}
                class="form-control"
                onChange={this.handleChange}
                name="typicalSeverity"
              >
                <option value=""> </option>
                <option value="unkown">Unkown</option>
                <option value="ver_low">Very low</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very_high">Very high</option>
              </select>
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label> Availability</label>
              <Multiselect
                style={{ outerWidth: 500 }}
                options={this.state.optionsAvailability} // Options to display in the dropdown
                selectedValues={this.state.selectedAvailability} // Preselected value to persist in dropdown
                onSelect={this.onSelectAvailability} // Function will trigger on select event
                onRemove={this.onRemoveAvailability} // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label> Confidentiality</label>
              <Multiselect
                style={{ outerWidth: 500 }}
                options={this.state.optionsConfidentiality} // Options to display in the dropdown
                selectedValues={this.state.selectedConfidentiality} // Preselected value to persist in dropdown
                onSelect={this.onSelectConfidentiality} // Function will trigger on select event
                onRemove={this.onRemoveConfidentiality} // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
              />
            </div>
          </div>
          <div className="d-inline-flex w-50">
            <div class="form-group w-100 pr-5">
              <label> Confidentiality access control authorization</label>
              <Multiselect
                options={
                  this.state.optionsConfidentialityAccessControlAuthorization
                } // Options to display in the dropdown
                selectedValues={
                  this.state.selectedConfidentialityAccessControlAuthorization
                } // Preselected value to persist in dropdown
                onSelect={
                  this.onSelectConfidentialityAccessControlAuthorization
                } // Function will trigger on select event
                onRemove={
                  this.onRemoveConfidentialityAccessControlAuthorization
                } // Function will trigger on remove event
                displayValue="label" // Property name to display in the dropdown options
              />
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
    var prerequisites = "";
    this.state.selectedPrerequisites.forEach(
      (element) => (prerequisites = prerequisites.concat(", " + element.value))
    );
    prerequisites = prerequisites.substring(2, prerequisites.length);

    var availability = "";
    this.state.selectedAvailability.forEach(
      (element) => (availability = availability.concat(", " + element.value))
    );
    availability = availability.substring(2, availability.length);

    var confidentiality = "";
    this.state.selectedConfidentiality.forEach(
      (element) =>
        (confidentiality = confidentiality.concat(", " + element.value))
    );
    confidentiality = confidentiality.substring(2, confidentiality.length);

    var confidentialityAccessControlAuthorization = "";
    this.state.selectedConfidentialityAccessControlAuthorization.forEach(
      (element) =>
        (confidentialityAccessControlAuthorization =
          confidentialityAccessControlAuthorization.concat(
            ", " + element.value
          ))
    );
    confidentialityAccessControlAuthorization =
      confidentialityAccessControlAuthorization.substring(
        2,
        confidentialityAccessControlAuthorization.length
      );

    const parameters = {
      likelihoodOfAttack: this.state.likelihoodOfAttack,
      typicalSeverity: this.state.typicalSeverity,
      prerequisites: prerequisites,
      availability: availability,
      confidentiality: confidentiality,
      confidentialityAccessControlAuthorization:
        confidentialityAccessControlAuthorization,
    };
    debugger;
    await this.props.getCbr(parameters);
    this.displayModalPost(this.props.cbr);
  }

  onSelectConfidentialityAccessControlAuthorization = (
    selectedList,
    selectedItem
  ) => {
    debugger;
    this.setState({
      selectedConfidentialityAccessControlAuthorization: selectedList,
    });
  };

  onRemoveConfidentialityAccessControlAuthorization = (
    selectedList,
    removedItem
  ) => {
    debugger;
    this.setState({
      selectedConfidentialityAccessControlAuthorization: selectedList,
    });
  };

  onSelectConfidentiality = (selectedList, selectedItem) => {
    debugger;
    this.setState({ selectedConfidentiality: selectedList });
  };

  onRemoveConfidentiality = (selectedList, removedItem) => {
    debugger;
    this.setState({ selectedConfidentiality: selectedList });
  };

  onSelectAvailability = (selectedList, selectedItem) => {
    debugger;
    this.setState({ selectedAvailability: selectedList });
  };

  onRemoveAvailability = (selectedList, removedItem) => {
    debugger;
    this.setState({ selectedAvailability: selectedList });
  };

  onSelect = (selectedList, selectedItem) => {
    debugger;
    this.setState({ selectedPrerequisites: selectedList });
  };

  onRemove = (selectedList, removedItem) => {
    debugger;
    this.setState({ selectedPrerequisites: selectedList });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    debugger;
    this.setState({
      [name]: value,
    });
  };
}

const mapStateToProps = (state) => ({
  cbr: state.cbr,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getCbr })
)(CaseBaseReasoning);
