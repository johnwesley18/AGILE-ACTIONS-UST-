package com.ust.serviceplatform.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ust.serviceplatform.model.Mail;

@FeignClient(value="MailService",url="http://localhost:8687/api/mail")
public interface MailClient {
	
	@PostMapping("/sendConfirmation")
	public void sendBookingConfirmation(@RequestBody Mail mail);
	
}
