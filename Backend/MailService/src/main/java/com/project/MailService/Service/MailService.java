package com.project.MailService.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendBookingConfirmation(String userEmail, String serviceName, String slot, String time, double amountPaid) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(userEmail);
        message.setSubject("Booking Confirmation: " + serviceName);
        message.setText("Thank you for booking " + serviceName + "\n"
                        + "Slot: " + slot + "\n"
                        + "Time: " + time + "\n"
                        + "Amount Paid: $" + amountPaid);
        javaMailSender.send(message);
    }
}
