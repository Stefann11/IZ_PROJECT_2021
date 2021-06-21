package com.example.InzenjeringProject.model;

import ucm.gaia.jcolibri.cbrcore.Attribute;
import ucm.gaia.jcolibri.cbrcore.CaseComponent;

public class AttackDescription implements CaseComponent {

	private String attack;
	private Scale likelihoodOfAttack;
	private Scale typicalSeverity;
	private String prerequisites;
	private String availability;
	private String confidentiality;
	private String confidentialityAccessControlAuthorization;
	private String mitigations;
	private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }

    public Scale getLikelihoodOfAttack() {
        return likelihoodOfAttack;
    }

    public void setLikelihoodOfAttack(Scale likelihoodOfAttack) {
        this.likelihoodOfAttack = likelihoodOfAttack;
    }

    public Scale getTypicalSeverity() {
        return typicalSeverity;
    }

    public void setTypicalSeverity(Scale typicalSeverity) {
        this.typicalSeverity = typicalSeverity;
    }

    public String getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(String prerequisites) {
        this.prerequisites = prerequisites;
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

    public String getConfidentialityAccessControlAuthorization() {
        return confidentialityAccessControlAuthorization;
    }

    public void setConfidentialityAccessControlAuthorization(String confidentialityAccessControlAuthorization) {
        this.confidentialityAccessControlAuthorization = confidentialityAccessControlAuthorization;
    }

    public String getMitigations() {
        return mitigations;
    }

    public void setMitigations(String mitigations) {
        this.mitigations = mitigations;
    }

    @Override
    public String toString() {
        return "AttackDescription{" +
                "attack='" + attack + '\'' +
                ", likelihoodOfAttack=" + likelihoodOfAttack +
                ", typicalSeverity=" + typicalSeverity +
                ", prerequisites='" + prerequisites + '\'' +
                ", availability='" + availability + '\'' +
                ", confidentiality='" + confidentiality + '\'' +
                ", confidentialityAccessControlAuthorization='" + confidentialityAccessControlAuthorization + '\'' +
                ", mitigations='" + mitigations + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    @Override
	public Attribute getIdAttribute() {
		return null;
	}

}
