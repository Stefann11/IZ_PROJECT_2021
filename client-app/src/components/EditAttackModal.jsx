import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { editAttack } from "../actions/actions";

class EditAttackModal extends Component {
  state = {
    showEditModal: this.props.show,
    name: "",
    likelihoodOfAttack: "",
    typicalSeverity: "",
    selectedPrerequisites: [],
    selectedAvailability: [],
    selectedConfidentiality: [],
    selectedConfidentialityAccessControlAuthorization: [],
    selectedMitigations: [],
    optionsMitigations: [
      {
        value: "use_input_validation_for_cookies",
        label: "Use input validation for cookies",
      },
      {
        value: "generate_and_validate_MAC_for_cookies",
        label: "Generate and validate MAC for cookies",
      },
      {
        value: "use_ssl/tls_to_protect_cookie_in_transit",
        label: "Use ssl/tls to protect cookie in transit",
      },
      {
        value: "web_server_implements_all_relevant_security_patches",
        label: "Web server implements all relevant security patches",
      },
      {
        value:
          "implement_message_level_security_such_as_hmac_in_the_http_communication",
        label:
          "Implement message level security such as hmac in the http communication",
      },
      { value: "utilize_defense_in_depth", label: "Utilize defense in depth" },
      {
        value: "enforce_principle_of_least_privilege",
        label: "Enforce principle of least privilege",
      },
      {
        value: "encrypt_all_communication_between_the_client_and_server",
        label: "Encrypt all communication between the client and server",
      },
      { value: "use_SSL_SSH_SCP", label: "Use SSL SSH SCP" },
      {
        value:
          "use_ifconfig/ipconfig_or_other_tools_to_detect_the_sniffer_installed_in_the_network",
        label:
          "Use ifconfig/ipconfig or other tools to detect the sniffer installed in the network",
      },
      {
        value:
          "obfuscate_network_traffic_through_encryption_to_prevent_its_readability_by_network_sniffers",
        label:
          "obfuscate network traffic through encryption to prevent its readability by network sniffers",
      },
      {
        value:
          "employ_appropriate_levels_of_segmentation_to_your_network_in_accordance_with_best_practices",
        label:
          "Employ appropriate levels of segmentation to your network in accordance with best practices",
      },
      {
        value:
          "encryption_of_all_data_packets_emanating_from_the_smartphone_to_a_retransmission_device_via_two_encrypted_tunnels_with_suite_b_cryptography",
        label:
          "Encryption of all data packets emanating from the smartphone to a retransmission device via two encrypted tunnels with suite b cryptography",
      },
      {
        value:
          "prevent_unknown_code_from_executing_on_a_system_through_the_use_of_an_allowlist_policy",
        label:
          "Prevent unknown code from executing on a system through the use of an allowlist policy",
      },
      {
        value:
          "patch_installed_applications_as_soon_as_new_updates_become_available",
        label:
          "Patch installed applications as soon as new updates become available",
      },
      {
        value: "automatic_randomization_of_WiFi_MAC_addresses",
        label: "Automatic randomization of WiFi MAC addresses",
      },
      {
        value: "frequent_changing_of_handset_and_retransmission_device",
        label: "Frequent changing of handset and retransmission device",
      },
      {
        value: "do_not_enable_the_feature_of_Hidden_SSIDs",
        label: "Do not enable the feature of Hidden SSIDs",
      },
      {
        value: "frequently_change_the_SSID_to_new_and_unrelated_values",
        label: "Frequently change the SSID to new and unrelated values",
      },
      {
        value: "frequent_changing_of_mobile_number",
        label: "Frequent changing of mobile number",
      },
      { value: "none", label: "None" },
      {
        value:
          "employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system",
        label:
          "Employ a robust network defense posture that includes an ids/ips system",
      },
      { value: "firewalls_or_ACLs", label: "Firewalls or ACLs" },
      {
        value: "rate_limiting_mechanisms_governing_ICMP_error_messages",
        label: "Rate limiting mechanisms governing ICMP error messages",
      },
      {
        value:
          "use_a_message_authentication_code_MAC_or_another_mechanism_to_perform_verification_of_message_authenticity/integrity_prior_to_decryption",
        label:
          "Use a message authentication code MAC or another mechanism to perform verification of message authenticity/integrity prior to decryption",
      },
      {
        value:
          "do_not_leak_information_back_to_the_user_as_to_any_cryptography_en",
        label:
          "Do not leak information back to the user as to any cryptography en",
      },
      {
        value:
          "use_of_hardened_baseband_firmware_on_retransmission_device_to_detect_and_prevent_the_use_of_weak_cellular_encryption",
        label:
          "Use of hardened baseband firmware on retransmission device to detect and prevent the use of weak cellular encryption",
      },
      {
        value:
          "monitor_cellular_RF_interface_to_detect_the_usage_of_weaker_than_expected_cellular_encryption",
        label:
          "Monitor cellular RF interface to detect the usage of weaker than expected cellular encryption",
      },
      {
        value:
          "monitor_connections_checking_headers_in_traffic_for_contradictory_domain_names_or_empty_domain_names",
        label:
          "Monitor connections checking headers in traffic for contradictory domain names or empty domain names",
      },
      {
        value:
          "implement_ingress_filters_to_check_the_validity_of_received_routes",
        label:
          "Implement ingress filters to check the validity of received routes",
      },
      { value: "implement_secure_BGP", label: "Implement secure BGP" },
      {
        value:
          "by_using_a_private_cellular_LTE_network_jamming_countermeasures_could_be_developed_and_employed",
        label:
          "By using a private cellular LTE network jamming countermeasures could be developed and employed",
      },
      {
        value: "hard_coded_alternate_DNS_server_in_applications",
        label: "Hard coded alternate DNS server in applications",
      },
      { value: "avoid_dependence_on_DNS", label: "Avoid dependence on DNS" },
      {
        value: "include_hosts_file/ip_address_in_the_application",
        label: "Include hosts file/ip address in the application",
      },
      {
        value:
          "ensure_best_practices_with_respect_to_communications_channel_protections",
        label:
          "Ensure best practices with respect to communications channel protections",
      },
      {
        value: "use_a_onion_domain_with_Tor_support",
        label: "Use a onion domain with Tor support",
      },
      {
        value:
          "commercial_defensive_technology_to_detect_and_alert_to_any_attempts_to_modify_mobile_technology_data_flows_or_to_inject_new_data_into_existing_data_flows_and_signaling_data",
        label:
          "Commercial defensive technology to detect and alert to any attempts to modify mobile technology data flows or to inject new data into existing data flows and signaling data",
      },
      {
        value:
          "strong_physical_security_of_all_devices_that_contain_secret_key_information",
        label:
          "Strong physical security of all devices that contain secret key information",
      },
      {
        value: "frequent_changes_to_secret_keys_and_certificates",
        label: "Frequent changes to secret keys and certificates",
      },
      {
        value:
          "commercial_defensive_technology_that_monitors_for_rogue_Wi_Fi_access_points_man_in_the_middle_attacks_and_anomalous_activity_with_the_mobile_device_baseband_radios",
        label:
          "Commercial defensive technology that monitors for rogue Wi Fi access points man in the middle attacks and anomalous activity with the mobile device baseband radios",
      },
      {
        value:
          "passively_monitor_cellular_network_connection_for_real_time_threat_detection_and_logging_for_manual_review",
        label:
          "Passively monitor cellular network connection for real time threat detection and logging for manual review",
      },
      {
        value: "leverage_encryption_to_encode_transmission_of_data",
        label: "Leverage encryption to encode transmission of data",
      },
      {
        value:
          "encrypt_sensitive_information_when_transmitted_on_insecure_mediums_to_prevent_interception",
        label:
          "Encrypt sensitive information when transmitted on insecure mediums to prevent interception",
      },
      { value: "keep_patches_up_to_date", label: "Keep patches up to date" },
      {
        value: "shut_down_unnecessary_services",
        label: "Shut down unnecessary services",
      },
      {
        value: "change_default_passwords_by_choosing_strong_passwords",
        label: "Change default passwords by choosing strong passwords",
      },
    ],
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
  async componentDidMount() {
    const prerequisites = this.props.attack.prerequisites.split(",");
    var selectedPrerequisites = [];
    var i;
    for (i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i].charAt(0) === " ") {
        prerequisites[i] = prerequisites[i].substring(
          1,
          prerequisites[i].length
        );
      }
      const test = this.state.optionsPrerequisites.filter((obj) => {
        return obj.value === prerequisites[i];
      });
      selectedPrerequisites.push(test[0]);
    }

    const confidentialityAccessControlAuthorization =
      this.props.attack.confidentiality_access_control_authorization.split(",");
    var selectedConfidentialityAccessControlAuthorization = [];
    for (i = 0; i < confidentialityAccessControlAuthorization.length; i++) {
      if (confidentialityAccessControlAuthorization[i].charAt(0) === " ") {
        confidentialityAccessControlAuthorization[i] =
          confidentialityAccessControlAuthorization[i].substring(
            1,
            confidentialityAccessControlAuthorization[i].length
          );
      }
      const test =
        this.state.optionsConfidentialityAccessControlAuthorization.filter(
          (obj) => {
            return obj.value === confidentialityAccessControlAuthorization[i];
          }
        );
      selectedConfidentialityAccessControlAuthorization.push(test[0]);
    }

    const availability = this.props.attack.availability.split(",");
    var selectedAvailability = [];
    for (i = 0; i < availability.length; i++) {
      if (availability[i].charAt(0) === " ") {
        availability[i] = availability[i].substring(1, availability[i].length);
      }
      const test = this.state.optionsAvailability.filter((obj) => {
        return obj.value === availability[i];
      });
      selectedAvailability.push(test[0]);
    }

    const confidentiality = this.props.attack.confidentiality.split(",");
    var selectedConfidentiality = [];
    for (i = 0; i < confidentiality.length; i++) {
      if (confidentiality[i].charAt(0) === " ") {
        confidentiality[i] = confidentiality[i].substring(
          1,
          confidentiality[i].length
        );
      }
      const test = this.state.optionsConfidentiality.filter((obj) => {
        return obj.value === confidentiality[i];
      });
      selectedConfidentiality.push(test[0]);
    }

    const mitigations = this.props.attack.mitigations.split(",");
    var selectedMitigations = [];
    for (i = 0; i < mitigations.length; i++) {
      if (mitigations[i].charAt(0) === " ") {
        mitigations[i] = mitigations[i].substring(1, mitigations[i].length);
      }
      const test = this.state.optionsMitigations.filter((obj) => {
        return obj.value === mitigations[i];
      });
      selectedMitigations.push(test[0]);
    }

    this.setState({
      name: this.props.attack.name,
      likelihoodOfAttack: this.props.attack.likelihood_of_attack,
      typicalSeverity: this.props.attack.typical_severity,
      selectedPrerequisites: selectedPrerequisites,
      selectedAvailability: selectedAvailability,
      selectedConfidentiality: selectedConfidentiality,
      selectedConfidentialityAccessControlAuthorization:
        selectedConfidentialityAccessControlAuthorization,
      selectedMitigations: selectedMitigations,
    });
    debugger;
  }

  render() {
    return (
      <Modal
        style={{
          maxWidth: "750px",
          width: "749px",
        }}
        isOpen={this.state.showEditModal}
        centered={true}
      >
        <ModalHeader toggle={this.toggle.bind(this)}>Edit attack</ModalHeader>
        <ModalBody>
          <div className="mt-3">
            <label for="firstName">Name Of Attack:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              class="form-control"
              id="name"
              placeholder="Enter name of attack"
            />
          </div>
          <div className="mt-5">
            <label for="lastName">Likelihood of attack:</label>
            <select
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
          <div className="mt-5">
            <label for="lastName">Typical severity:</label>
            <select
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
          <div className="mt-5">
            <label> Prerequisites</label>
            <Multiselect
              options={this.state.optionsPrerequisites} // Options to display in the dropdown
              selectedValues={this.state.selectedPrerequisites} // Preselected value to persist in dropdown
              onSelect={this.onSelect} // Function will trigger on select event
              onRemove={this.onRemove} // Function will trigger on remove event
              displayValue="label" // Property name to display in the dropdown options
            />
          </div>
          <div class="mt-5">
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
          <div class="mt-5">
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
          <div class="mt-5">
            <label> Confidentiality access control authorization</label>
            <Multiselect
              options={
                this.state.optionsConfidentialityAccessControlAuthorization
              } // Options to display in the dropdown
              selectedValues={
                this.state.selectedConfidentialityAccessControlAuthorization
              } // Preselected value to persist in dropdown
              onSelect={this.onSelectConfidentialityAccessControlAuthorization} // Function will trigger on select event
              onRemove={this.onRemoveConfidentialityAccessControlAuthorization} // Function will trigger on remove event
              displayValue="label" // Property name to display in the dropdown options
            />
          </div>
          <div class="mt-5">
            <label> Mitigations</label>
            <Multiselect
              options={this.state.optionsMitigations} // Options to display in the dropdown
              selectedValues={this.state.selectedMitigations} // Preselected value to persist in dropdown
              onSelect={this.onSelectMitigations} // Function will trigger on select event
              onRemove={this.onRemoveMitigations} // Function will trigger on remove event
              displayValue="label" // Property name to display in the dropdown options
            />
          </div>

          <div style={{ textAlign: "right" }} className="mt-5 w-100">
            <button
              className="btn btn-primary btn-lg btn-block w-100"
              onClick={() => {
                this.create();
              }}
            >
              Edit
            </button>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    );
  }

  async create() {
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

    var mitigations = "";
    this.state.selectedMitigations.forEach(
      (element) => (mitigations = mitigations.concat(", " + element.value))
    );
    mitigations = mitigations.substring(2, mitigations.length);
    const parameters = {
      attack: this.state.name,
      availability: availability,
      confidentiality: confidentiality,
      confidentiality_access_control_authorization:
        confidentialityAccessControlAuthorization,
      likelihood_of_attack: this.state.likelihoodOfAttack,
      mitigations: mitigations,
      name: this.state.name,
      prerequisites: prerequisites,
      typical_severity: this.state.typicalSeverity,
    };
    debugger;
    await this.props.editAttack(parameters);
    window.location = "/";
  }

  onSelectMitigations = (selectedList, selectedItem) => {
    debugger;
    this.setState({
      selectedMitigations: selectedList,
    });
  };

  onRemoveMitigations = (selectedList, removedItem) => {
    debugger;
    this.setState({
      selectedMitigations: selectedList,
    });
  };

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

  toggle() {
    debugger;
    this.setState({ showEditModal: false });
    this.props.onShowChange();
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { editAttack })(EditAttackModal);
