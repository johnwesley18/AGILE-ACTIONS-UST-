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
        message.setSubject("Your Booking Confirmation - AgileAction");

        // Constructing the message content
        String content = "Dear Customer,\n\n"
                + "Thank you for booking with AgileAction. We are pleased to confirm your reservation details below:\n\n"
                + "Service: " + mail.getServiceName() + "\n"
                + "Date and Time: " + mail.getTime() + "\n"
                + "Slot: " + mail.getSlot() + "\n"
                + "Amount Paid: $" + mail.getAmountPaid() + "\n\n"
                + "Please retain this email for your records.\n\n"
                + "If you have any questions or need to make changes to your booking, feel free to contact us at support@agileaction.com.\n\n"
                + "Thank you for choosing AgileAction. We look forward to serving you.\n\n"
                + "Best regards,\n"
                + "The AgileAction Team\n"
                + "www.agileaction.com";

        message.setText(content);

        javaMailSender.send(message);
    }
}
