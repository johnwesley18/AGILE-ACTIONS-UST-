package com.capstone.ReviewingSection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ReviewingSection.model.RefundRequest;
import com.capstone.ReviewingSection.services.RefundService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/refund")
@CrossOrigin("*")
public class RefundController {
	@Autowired
	private RefundService service;
	
	@GetMapping("/getAll")
	public List<RefundRequest> getAll() {
		return service.getAllRefundRequest();
	}
	
	 @PutMapping("/updateStatus/{id}")
	    public ResponseEntity<RefundRequest> updateStatus(@PathVariable Long id,@RequestParam String status) {
	        RefundRequest updatedRefundRequest = service.updateStatus(id, status);
	        return ResponseEntity.ok(updatedRefundRequest);
	    }
	
	
	 @PostMapping("/saveRequest")
		public RefundRequest saveRequest(@RequestBody RefundRequest refund) {
			return service.saveRefundRequest(refund);
		}

}
