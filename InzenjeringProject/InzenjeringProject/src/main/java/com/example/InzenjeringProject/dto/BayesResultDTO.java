package com.example.InzenjeringProject.dto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class BayesResultDTO {
    private String attack;
    private Float eval;

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }

    public Float getEval() {
        return eval;
    }

    public void setEval(Float eval) {
        this.eval = eval;
    }

    public BayesResultDTO(String attack, Float eval) {
        this.attack = attack;
        this.eval = eval;
    }
}
