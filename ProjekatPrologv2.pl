attack(accessing_intercepting_modifyingHTTPCookies).
likelihood_of_attack(accessing_intercepting_modifyingHTTPCookies, high).
typical_severity(accessing_intercepting_modifyingHTTPCookies, high).
prerequisites(accessing_intercepting_modifyingHTTPCookies, [relies_on_cookies, cookie_contains_sensitive_information, response_contains_cookie]).
availability(accessing_intercepting_modifyingHTTPCookies, [none]).
confidentiality(accessing_intercepting_modifyingHTTPCookies, [read_data]).
confidentiality_access_control_authorization(accessing_intercepting_modifyingHTTPCookies, [gain_privileges]).
mitigations(accessing_intercepting_modifyingHTTPCookies, [use_input_validation_for_cookies, generate_and_validate_MAC_for_cookies, use_ssl/tls_to_protect_cookie_in_transit, web_server_implements_all_relevant_security_patches]).

attack(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data).
likelihood_of_attack(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, medium).
typical_severity(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, very_high).
prerequisites(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, [opportunity_to_intercept_must_exist_beyond_the_point_where_SSL_is_terminated, attacker_can_insert_listener_in_the_client_server_communication_path]).
availability(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, [none]).
confidentiality(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, [none]).
confidentiality_access_control_authorization(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, [gain_privileges]).
mitigations(utilizing_RESTs_Trust_in_the_System_Resource_to_Obtain_Sensitive_Data, [implement_message_level_security_such_as_hmac_in_the_http_communication, utilize_defense_in_depth, enforce_principle_of_least_privilege]).

attack(sniff_Application_Code).
likelihood_of_attack(sniff_Application_Code, low).
typical_severity(sniff_Application_Code, high).
prerequisites(sniff_Application_Code, [attacker_must_be_placed_in_the_communication_path_between_client_and_server, targeted_application_must_receive_application_code_from_the_server, attacker_must_employ_sniffer_on_network_without_being_detected]).
availability(sniff_Application_Code, [none]).
confidentiality(sniff_Application_Code, [read_data]).
confidentiality_access_control_authorization(sniff_Application_Code, [gain_privileges]).
mitigations(sniff_Application_Code, [encrypt_all_communication_between_the_client_and_server, use_SSL_SSH_SCP, use_ifconfig/ipconfig_or_other_tools_to_detect_the_sniffer_installed_in_the_network]).

attack(sniffing_network_traffic).
likelihood_of_attack(sniffing_network_traffic, unknown).
typical_severity(sniffing_network_traffic, medium).
prerequisites(sniffing_network_traffic, [target_communication_on_network_protocol_is_visible_by_network_sniffing_application, adversary_needs_logical_access_to_target_network]).
availability(sniffing_network_traffic, [none]).
confidentiality(sniffing_network_traffic, [read_data]).
confidentiality_access_control_authorization(sniffing_network_traffic, [none]).
mitigations(sniffing_network_traffic, [obfuscate_network_traffic_through_encryption_to_prevent_its_readability_by_network_sniffers, employ_appropriate_levels_of_segmentation_to_your_network_in_accordance_with_best_practices]).

attack(cellular_traffic_intercept).
likelihood_of_attack(cellular_traffic_intercept, unknown).
typical_severity(cellular_traffic_intercept, low).
prerequisites(cellular_traffic_intercept, [none]).
availability(cellular_traffic_intercept, [none]).
confidentiality(cellular_traffic_intercept, [read_data]).
confidentiality_access_control_authorization(cellular_traffic_intercept, [none]).
mitigations(cellular_traffic_intercept, [encryption_of_all_data_packets_emanating_from_the_smartphone_to_a_retransmission_device_via_two_encrypted_tunnels_with_suite_b_cryptography]).

attack(probe_audio_and_video_peripherals).
likelihood_of_attack(probe_audio_and_video_peripherals, low).
typical_severity(probe_audio_and_video_peripherals, high).
prerequisites(probe_audio_and_video_peripherals, [adversary_must_place_malicious_code_on_target_device]).
availability(probe_audio_and_video_peripherals, [none]).
confidentiality(probe_audio_and_video_peripherals, [read_data]).
confidentiality_access_control_authorization(probe_audio_and_video_peripherals, [none]).
mitigations(probe_audio_and_video_peripherals, [prevent_unknown_code_from_executing_on_a_system_through_the_use_of_an_allowlist_policy, patch_installed_applications_as_soon_as_new_updates_become_available]).

attack(wifi_MAC_address_tracking).
likelihood_of_attack(wifi_MAC_address_tracking, unknown).
typical_severity(wifi_MAC_address_tracking, low).
prerequisites(wifi_MAC_address_tracking, [none]).
availability(wifi_MAC_address_tracking, [none]).
confidentiality(wifi_MAC_address_tracking, [none]).
confidentiality_access_control_authorization(wifi_MAC_address_tracking, [none]).
mitigations(wifi_MAC_address_tracking, [automatic_randomization_of_WiFi_MAC_addresses, frequent_changing_of_handset_and_retransmission_device]).

attack(wifi_SSID_tracking).
likelihood_of_attack(wifi_SSID_tracking, unknown).
typical_severity(wifi_SSID_tracking, low).
prerequisites(wifi_SSID_tracking, [none]).
availability(wifi_SSID_tracking, [none]).
confidentiality(wifi_SSID_tracking, [none]).
confidentiality_access_control_authorization(wifi_SSID_tracking, [none]).
mitigations(wifi_SSID_tracking, [do_not_enable_the_feature_of_Hidden_SSIDs, frequently_change_the_SSID_to_new_and_unrelated_values]).

attack(cellular_broadcast_message_request).
likelihood_of_attack(cellular_broadcast_message_request, unknown).
typical_severity(cellular_broadcast_message_request, low).
prerequisites(cellular_broadcast_message_request, [attacker_knows_targets_phone_number]).
availability(cellular_broadcast_message_request, [none]).
confidentiality(cellular_broadcast_message_request, [none]).
confidentiality_access_control_authorization(cellular_broadcast_message_request, [none]).
mitigations(cellular_broadcast_message_request, [frequent_changing_of_mobile_number]).

attack(signal_strength_tracking).
likelihood_of_attack(signal_strength_tracking, unknown).
typical_severity(signal_strength_tracking, low).
prerequisites(signal_strength_tracking, [none]).
availability(signal_strength_tracking, [none]).
confidentiality(signal_strength_tracking, [none]).
confidentiality_access_control_authorization(signal_strength_tracking, [none]).
mitigations(signal_strength_tracking, [none]).

attack(tcp_SYN_scan).
likelihood_of_attack(tcp_SYN_scan, unknown).
typical_severity(tcp_SYN_scan, low).
prerequisites(tcp_SYN_scan, [software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_SYN_scan, [none]).
confidentiality(tcp_SYN_scan, [other]).
confidentiality_access_control_authorization(tcp_SYN_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_SYN_scan, [none]).

attack(tcp_connect_scan).
likelihood_of_attack(tcp_connect_scan, unknown).
typical_severity(tcp_connect_scan, low).
prerequisites(tcp_connect_scan, [adversary_needs_logical_access_to_the_target_network]).
availability(tcp_connect_scan, [none]).
confidentiality(tcp_connect_scan, [read_data]).
confidentiality_access_control_authorization(tcp_connect_scan, [none]).
mitigations(tcp_connect_scan, [employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system]).

attack(tcp_FIN_scan).
likelihood_of_attack(tcp_FIN_scan, unknown).
typical_severity(tcp_FIN_scan, low).
prerequisites(tcp_FIN_scan, [fin_requires_use_of_raw_sockets, software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_FIN_scan, [none]).
confidentiality(tcp_FIN_scan, [other]).
confidentiality_access_control_authorization(tcp_FIN_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_FIN_scan,  [employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system]).

attack(tcp_xmas_scan).
likelihood_of_attack(tcp_xmas_scan, unknown).
typical_severity(tcp_xmas_scan, low).
prerequisites(tcp_xmas_scan, [adversary_needs_logical_access_to_target_network, requires_use_of_raw_sockets, software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_xmas_scan, [unreliable_execution]).
confidentiality(tcp_xmas_scan, [other]).
confidentiality_access_control_authorization(tcp_xmas_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_xmas_scan, [employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system]).

attack(tcp_null_scan).
likelihood_of_attack(tcp_null_scan, unknown).
typical_severity(tcp_null_scan, low).
prerequisites(tcp_null_scan, [adversary_needs_logical_access_to_target_network, requires_use_of_raw_sockets, software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_null_scan, [none]).
confidentiality(tcp_null_scan, [other]).
confidentiality_access_control_authorization(tcp_null_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_null_scan, [employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system]).

attack(tcp_ACK_scan).
likelihood_of_attack(tcp_ACK_scan, unknown).
typical_severity(tcp_ACK_scan, low).
prerequisites(tcp_ACK_scan, [adversary_needs_logical_access_to_target_network, requires_use_of_raw_sockets, software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_ACK_scan, [none]).
confidentiality(tcp_ACK_scan, [other]).
confidentiality_access_control_authorization(tcp_ACK_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_ACK_scan, [none]).

attack(tcp_window_scan).
likelihood_of_attack(tcp_window_scan, unknown).
typical_severity(tcp_window_scan, low).
prerequisites(tcp_window_scan, [requires_use_of_raw_sockets, software_is_not_on_windows_XP_SP_2, linux_and_unix_systems_requires_root_privileges_to_use_raw_sockets]).
availability(tcp_window_scan, [none]).
confidentiality(tcp_window_scan, [other]).
confidentiality_access_control_authorization(tcp_window_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_window_scan, [none]).

attack(tcp_RPC_scan).
likelihood_of_attack(tcp_RPC_scan, unknown).
typical_severity(tcp_RPC_scan, low).
prerequisites(tcp_RPC_scan, [none]).
availability(tcp_RPC_scan, [none]).
confidentiality(tcp_RPC_scan, [other]).
confidentiality_access_control_authorization(tcp_RPC_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(tcp_RPC_scan, [employ_a_robust_network_defense_posture_that_includes_an_ids/ips_system]).

attack(udp_scan).
likelihood_of_attack(udp_scan, unknown).
typical_severity(udp_scan, low).
prerequisites(udp_scan, [ability_to_send_UDP_datagrams_to_host_and_receive_ICMP_error_from_that_host]).
availability(udp_scan, [none]).
confidentiality(udp_scan, [other]).
confidentiality_access_control_authorization(udp_scan, [bypass_protection_mechanism, hide_activities]).
mitigations(udp_scan, [firewalls_or_ACLs, rate_limiting_mechanisms_governing_ICMP_error_messages]).

attack(padding_oracle_crypto_attack).
likelihood_of_attack(padding_oracle_crypto_attack, unknown).
typical_severity(padding_oracle_crypto_attack, high).
prerequisites(padding_oracle_crypto_attack, [decrtypton_routine_does_not_work_propely, target_system_leaks_data, padding_oracle_remains_available_for_enough_time]).
availability(padding_oracle_crypto_attack, [none]).
confidentiality(padding_oracle_crypto_attack, [none]).
confidentiality_access_control_authorization(padding_oracle_crypto_attack, [none]).
mitigations(padding_oracle_crypto_attack, [use_a_message_authentication_code_MAC_or_another_mechanism_to_perform_verification_of_message_authenticity/integrity_prior_to_decryption, do_not_leak_information_back_to_the_user_as_to_any_cryptography_encountered_during_decryption]).

attack(cryptanalysis_of_cellular_encryption).
likelihood_of_attack(cryptanalysis_of_cellular_encryption, unknown).
typical_severity(cryptanalysis_of_cellular_encryption, high).
prerequisites(cryptanalysis_of_cellular_encryption, [none]).
availability(cryptanalysis_of_cellular_encryption, [none]).
confidentiality(cryptanalysis_of_cellular_encryption, [other]).
confidentiality_access_control_authorization(cryptanalysis_of_cellular_encryption, [none]).
mitigations(cryptanalysis_of_cellular_encryption, [use_of_hardened_baseband_firmware_on_retransmission_device_to_detect_and_prevent_the_use_of_weak_cellular_encryption, monitor_cellular_RF_interface_to_detect_the_usage_of_weaker_than_expected_cellular_encryption]).

attack(contradictory_destinations_in_traffic_routing_schemes).
likelihood_of_attack(contradictory_destinations_in_traffic_routing_schemes, medium).
typical_severity(contradictory_destinations_in_traffic_routing_schemes, high).
prerequisites(contradictory_destinations_in_traffic_routing_schemes, [adversary_must_be_aware_that_their_message_will_be_routed_using_CDN]).
availability(contradictory_destinations_in_traffic_routing_schemes, [none]).
confidentiality(contradictory_destinations_in_traffic_routing_schemes, [read_data, modify_data]).
confidentiality_access_control_authorization(contradictory_destinations_in_traffic_routing_schemes, [none]).
mitigations(contradictory_destinations_in_traffic_routing_schemes, [monitor_connections_checking_headers_in_traffic_for_contradictory_domain_names_or_empty_domain_names]).

attack(block_logging_to_central_repository).
likelihood_of_attack(block_logging_to_central_repository, unknown).
typical_severity(block_logging_to_central_repository, low).
prerequisites(block_logging_to_central_repository, [none]).
availability(block_logging_to_central_repository, [none]).
confidentiality(block_logging_to_central_repository, [none]).
confidentiality_access_control_authorization(block_logging_to_central_repository, [none]).
mitigations(block_logging_to_central_repository, [none]).

attack(bgp_route_disabling).
likelihood_of_attack(bgp_route_disabling, unknown).
typical_severity(bgp_route_disabling, unknown).
prerequisites(bgp_route_disabling, [adversary_must_have_control_of_router_that_manipulate_BGP_updates]).
availability(bgp_route_disabling, [other]).
confidentiality(bgp_route_disabling, [none]).
confidentiality_access_control_authorization(bgp_route_disabling, [none]).
mitigations(bgp_route_disabling, [implement_ingress_filters_to_check_the_validity_of_received_routes, implement_secure_BGP]).

attack(orbital_jamming).
likelihood_of_attack(orbital_jamming, low).
typical_severity(orbital_jamming, high).
prerequisites(orbital_jamming, [attack_requires_knowladge_of_the_satellites_coordinates_for_targeting]).
availability(orbital_jamming, [other]).
confidentiality(orbital_jamming, [none]).
confidentiality_access_control_authorization(orbital_jamming, [none]).
mitigations(orbital_jamming, [none]).

attack(wifi_jamming).
likelihood_of_attack(wifi_jamming, medium).
typical_severity(wifi_jamming, high).
prerequisites(wifi_jamming, [lack_of_anti_jam_features_in_802_11, lack_of_authentication_on_deauthentication/disassociation_packets_on_802_11_based_networks]).
availability(wifi_jamming, [other, [resource_consumption]]).
confidentiality(wifi_jamming, [none]).
confidentiality_access_control_authorization(wifi_jamming, [none]).
mitigations(wifi_jamming, [none]).

attack(cellular_jamming).
likelihood_of_attack(cellular_jamming, unknown).
typical_severity(cellular_jamming, low).
prerequisites(cellular_jamming, [lack_of_anti_jam_features_in_cellular_technology]).
availability(cellular_jamming, [resource_consumption]).
confidentiality(cellular_jamming, [none]).
confidentiality_access_control_authorization(cellular_jamming, [none]).
mitigations(cellular_jamming, [by_using_a_private_cellular_LTE_network_jamming_countermeasures_could_be_developed_and_employed]).

attack(dns_blocking).
likelihood_of_attack(dns_blocking, unknown).
typical_severity(dns_blocking, unknown).
prerequisites(dns_blocking, [attack_requires_ability_to_conduct_deep_packet_inspection_with_an_InPath_device_that_can_drop_the_targeted_traffic_and/or_connection]).
availability(dns_blocking, [other]).
confidentiality(dns_blocking, [none]).
confidentiality_access_control_authorization(dns_blocking, [none]).
mitigations(dns_blocking, [hard_coded_alternate_DNS_server_in_applications, avoid_dependence_on_DNS, include_hosts_file/ip_address_in_the_application, ensure_best_practices_with_respect_to_communications_channel_protections, use_a_onion_domain_with_Tor_support]).

attack(ip_address_blocking).
likelihood_of_attack(ip_address_blocking, low).
typical_severity(ip_address_blocking, high).
prerequisites(ip_address_blocking, [attack_requires_ability_to_conduct_deep_packet_inspection_with_an_InPath_device_that_can_drop_the_targeted_traffic_and/or_connection]).
availability(ip_address_blocking, [other]).
confidentiality(ip_address_blocking, [none]).
confidentiality_access_control_authorization(ip_address_blocking, [none]).
mitigations(ip_address_blocking, [have_a_large_pool_of_backup_IPs_built_into_the_application_and_support_proxy_capability_in_the_application]).

attack(cellular_data_injection).
likelihood_of_attack(cellular_data_injection, unknown).
typical_severity(cellular_data_injection, high).
prerequisites(cellular_data_injection, [none]).
availability(cellular_data_injection, [modify_data, resource_consumption]).
confidentiality(cellular_data_injection, [none]).
confidentiality_access_control_authorization(cellular_data_injection, [none]).
mitigations(cellular_data_injection, [commercial_defensive_technology_to_detect_and_alert_to_any_attempts_to_modify_mobile_technology_data_flows_or_to_inject_new_data_into_existing_data_flows_and_signaling_data]).

attack(tcp_RST_injection).
likelihood_of_attack(tcp_RST_injection, unknown).
typical_severity(tcp_RST_injection, unknown).
prerequisites(tcp_RST_injection, [on/in_path_device]).
availability(tcp_RST_injection, [none]).
confidentiality(tcp_RST_injection, [none]).
confidentiality_access_control_authorization(tcp_RST_injection, [none]).
mitigations(tcp_RST_injection, [none]).

attack(mobile_device_fault_injection).
likelihood_of_attack(mobile_device_fault_injection, unknown).
typical_severity(mobile_device_fault_injection, unknown).
prerequisites(mobile_device_fault_injection, [none]).
availability(mobile_device_fault_injection, [none]).
confidentiality(mobile_device_fault_injection, [read_data]).
confidentiality_access_control_authorization(mobile_device_fault_injection, [none]).
mitigations(mobile_device_fault_injection, [strong_physical_security_of_all_devices_that_contain_secret_key_information, frequent_changes_to_secret_keys_and_certificates]).

attack(carry_off_GPS_attack).
likelihood_of_attack(carry_off_GPS_attack, low).
typical_severity(carry_off_GPS_attack, high).
prerequisites(carry_off_GPS_attack, [target_must_be_relying_on_valid_GPS_signal_to_preform_critical_operations]).
availability(carry_off_GPS_attack, [none]).
confidentiality(carry_off_GPS_attack, [none]).
confidentiality_access_control_authorization(carry_off_GPS_attack, [none]).
mitigations(carry_off_GPS_attack, [none]).

attack(terrestrial_jamming).
likelihood_of_attack(terrestrial_jamming, low).
typical_severity(terrestrial_jamming, high).
prerequisites(terrestrial_jamming, [none]).
availability(terrestrial_jamming, [other]).
confidentiality(terrestrial_jamming, [none]).
confidentiality_access_control_authorization(terrestrial_jamming, [none]).
mitigations(terrestrial_jamming, [none]).

attack(evil_twin_wifi_attack).
likelihood_of_attack(evil_twin_wifi_attack, unknown).
typical_severity(evil_twin_wifi_attack, low).
prerequisites(evil_twin_wifi_attack, [none]).
availability(evil_twin_wifi_attack, [none]).
confidentiality(evil_twin_wifi_attack, [read_data]).
confidentiality_access_control_authorization(evil_twin_wifi_attack, [none]).
mitigations(evil_twin_wifi_attack, [commercial_defensive_technology_that_monitors_for_rogue_Wi_Fi_access_points_man_in_the_middle_attacks_and_anomalous_activity_with_the_mobile_device_baseband_radios]).

attack(cellular_rogue_base_station).
likelihood_of_attack(cellular_rogue_base_station, unknown).
typical_severity(cellular_rogue_base_station, low).
prerequisites(cellular_rogue_base_station, [none]).
availability(cellular_rogue_base_station, [none]).
confidentiality(cellular_rogue_base_station, [read_data]).
confidentiality_access_control_authorization(cellular_rogue_base_station, [none]).
mitigations(cellular_rogue_base_station, [passively_monitor_cellular_network_connection_for_real_time_threat_detection_and_logging_for_manual_review]).


counter_measures(Attack_name, X) :- mitigations(Attack_name, X), attack(Attack_name).
contains(S,[]).
contains(S,[H|T]) :- member(H,S), contains(S,T).
counter_measures_availability(Availability_consequences, X) :- availability(A, S2), contains(S2, Availability_consequences), counter_measures(A, X). 
counter_measures_confidentiality(Confidentiality_consequences, X) :- confidentiality(A, S2), contains(S2, Confidentiality_consequences), counter_measures(A, X).
counter_measures_authorization(Authorization_consequences, X) :- confidentiality_access_control_authorization(A, S2), contains(S2, Authorization_consequences), counter_measures(A, X).
counter_measures_all(C, X) :- counter_measures_availability(C, X); counter_measures_confidentiality(C, X); counter_measures_authorization(C, X).
counter_measures_by_scope(C1, C2, C3, X) :- counter_measures_availability(C1, X), counter_measures_confidentiality(C2, X), counter_measures_authorization(C3, X).

%Navodjenje simptoma iz razlicitih kategorija u proizvoljnom redosledu, a da algoritam pronadje napade i njegove protiv mere
%contains_counter_measures(C, A) :- availability(A, S2); confidentiality(A, S3); append([S2], [S3], K), contains_counter_measures2(C, K, A). 
%contains_counter_measures2(C, K, A) :- confidentiality_access_control_authorization(A, S4), intersection([K], [S4], K2).

