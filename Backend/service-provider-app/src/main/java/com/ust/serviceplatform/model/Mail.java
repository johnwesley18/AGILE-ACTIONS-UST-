package com.ust.serviceplatform.model;

public class Mail {
    private String userEmail;
    private String serviceName;
    private String slot;
    private String time;
    private double amountPaid;

    // Constructor
    public Mail(String userEmail, String serviceName, String slot, String time, double amountPaid) {
        this.userEmail = userEmail;
        this.serviceName = serviceName;
        this.slot = slot;
        this.time = time;
        this.amountPaid = amountPaid;
    }

    // Getters and Setters
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getSlot() {
        return slot;
    }

    public void setSlot(String slot) {
        this.slot = slot;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getAmountPaid() {
        return amountPaid;
    }

    public void setAmountPaid(double amountPaid) {
        this.amountPaid = amountPaid;
    }

    // toString method for displaying the object information
    @Override
    public String toString() {
        return "Booking{" +
                "userEmail='" + userEmail + '\'' +
                ", serviceName='" + serviceName + '\'' +
                ", slot='" + slot + '\'' +
                ", time='" + time + '\'' +
                ", amountPaid=" + amountPaid +
                '}';
    }
}

