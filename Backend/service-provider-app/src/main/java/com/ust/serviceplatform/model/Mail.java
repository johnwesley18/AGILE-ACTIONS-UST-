package com.ust.serviceplatform.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Mail {
    private String userEmail;
    private String serviceName;
    private String slot;
    private LocalDate time;
    private double amountPaid;

    
}

