

package com.capstone.ReviewingSection.controller;

import com.capstone.ReviewingSection.model.EmergencyAlert;
import com.capstone.ReviewingSection.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emergency")
public class EmergencyController {
    @Autowired
    private EmergencyService emergencyService;

    @PostMapping("/trigger")
    public EmergencyAlert triggerAlert(@RequestBody EmergencyAlert alert) {
        return emergencyService.triggerEmergencyAlert(alert);
    }
}
