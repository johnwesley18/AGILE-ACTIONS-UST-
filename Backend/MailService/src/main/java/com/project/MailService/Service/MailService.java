package com.project.MailService.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.project.MailService.Models.Mail;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendBookingConfirmation(Mail mail) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mail.getUserEmail());
        message.setSubject("Booking Confirmation: " + mail.getServiceName());
        message.setText("Thank you for booking " + mail.getServiceName() + "\n"
                        + "Slot: " + mail.getSlot() + "\n"
                        + "Time: " + mail.getTime() + "\n"
                        + "Amount Paid: $" + mail.getAmountPaid());
        javaMailSender.send(message);
    }
}
