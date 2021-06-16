package com.example.InzenjeringProject.dto;

public class CBRResultDTO {
    private String attack;
    private String mitigations;
    private Double eval;

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }

    public String getMitigations() {
        return mitigations;
    }

    public void setMitigations(String mitigations) {
        this.mitigations = mitigations;
    }

    public Double getEval() {
        return eval;
    }

    public void setEval(Double eval) {
        this.eval = eval;
    }

    public CBRResultDTO(String attack, String mitigations, Double eval) {
        this.attack = attack;
        this.mitigations = mitigations;
        this.eval = eval;
    }
}
