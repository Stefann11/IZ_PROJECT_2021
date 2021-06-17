package com.example.InzenjeringProject.dto;

public class RDFAttackDTO {
    private String attack;
    private String availability;
    private String confidentiality;
    private String confidentiality_access_control_authorization;
    private String likelihood_of_attack;
    private String mitigations;
    private String name;
    private String prerequisites;
    private String typical_severity;

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getConfidentiality() {
        return confidentiality;
    }

    public void setConfidentiality(String confidentiality) {
        this.confidentiality = confidentiality;
    }

    public String getConfidentiality_access_control_authorization() {
        return confidentiality_access_control_authorization;
    }

    public void setConfidentiality_access_control_authorization(String confidentiality_access_control_authorization) {
        this.confidentiality_access_control_authorization = confidentiality_access_control_authorization;
    }

    public String getLikelihood_of_attack() {
        return likelihood_of_attack;
    }

    public void setLikelihood_of_attack(String likelihood_of_attack) {
        this.likelihood_of_attack = likelihood_of_attack;
    }

    public String getMitigations() {
        return mitigations;
    }

    public void setMitigations(String mitigations) {
        this.mitigations = mitigations;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(String prerequisites) {
        this.prerequisites = prerequisites;
    }

    public String getTypical_severity() {
        return typical_severity;
    }

    public void setTypical_severity(String typical_severity) {
        this.typical_severity = typical_severity;
    }

    public RDFAttackDTO(String attack, String availability, String confidentiality,
                        String confidentiality_access_control_authorization, String likelihood_of_attack,
                        String mitigations, String name, String prerequisites, String typical_severity) {
        this.attack = attack;
        this.availability = availability;
        this.confidentiality = confidentiality;
        this.confidentiality_access_control_authorization = confidentiality_access_control_authorization;
        this.likelihood_of_attack = likelihood_of_attack;
        this.mitigations = mitigations;
        this.name = name;
        this.prerequisites = prerequisites;
        this.typical_severity = typical_severity;
    }
}
