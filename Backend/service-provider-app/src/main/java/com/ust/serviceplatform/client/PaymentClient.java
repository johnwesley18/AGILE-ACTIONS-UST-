package com.ust.serviceplatform.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ust.serviceplatform.pojo.TransactionPojo;

@FeignClient(value="payment-service",url="http://localhost:9696/payment")
public interface PaymentClient {

	@PostMapping("/create-order")
	TransactionPojo createNewTransaction(@RequestBody TransactionPojo transactionPojo)
			throws Exception;
}
