

package com.capstone.ReviewingSection.services;

import com.capstone.ReviewingSection.model.EmergencyAlert;
import com.capstone.ReviewingSection.repository.EmergencyAlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmergencyService {
    @Autowired
    private EmergencyAlertRepository alertRepository;

    public EmergencyAlert triggerEmergencyAlert(EmergencyAlert alert) {
        return alertRepository.save(alert);
    }
}
