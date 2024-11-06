package com.project.MailService.Controller;

import com.project.MailService.Service.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mail")
public class MailController {
	
	@Autowired
    private MailService mailService;

    @PostMapping("/sendConfirmation")
    public void sendBookingConfirmation(
            @RequestParam String userEmail,
            @RequestParam String serviceName,
            @RequestParam String slot,
            @RequestParam String time,
            @RequestParam double amountPaid) {
        mailService.sendBookingConfirmation(userEmail, serviceName, slot, time, amountPaid);
    }
}
