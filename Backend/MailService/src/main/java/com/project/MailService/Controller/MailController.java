package com.project.MailService.Controller;

import com.project.MailService.Models.Mail;
import com.project.MailService.Service.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mail")
public class MailController {
	
	@Autowired
    private MailService mailService;

    @PostMapping("/sendConfirmation")
    public void sendBookingConfirmation(@RequestBody Mail mail) {
        mailService.sendBookingConfirmation(mail);
    }
}
