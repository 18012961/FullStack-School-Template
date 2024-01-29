package com.springbackend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Contact {
    @Id
    @GeneratedValue
    private long id;
    private String Mission;
    private String Vision;
    private String AboutUs;
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getVision() {
        return this.Vision;
    }
    public void setVision(String Vision) {
        this.Vision = Vision;
    }
    public String getMission() {
        return this.Mission;
    }
    public void setMission(String Mission) {
        this.Mission = Mission;
    }
    public String getAboutUs() {
        return this.AboutUs;
    }
    public void setAboutUs(String AboutUs) {
        this.AboutUs = AboutUs;
    }
}
