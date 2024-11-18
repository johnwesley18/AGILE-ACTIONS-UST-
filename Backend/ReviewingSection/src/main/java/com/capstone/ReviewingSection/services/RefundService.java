package com.capstone.ReviewingSection.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.ReviewingSection.model.RefundRequest;
import com.capstone.ReviewingSection.repository.RefundRepository;

@Service
public class RefundService {
	
	@Autowired
	private RefundRepository repo;
	
	public RefundRequest saveRefundRequest(RefundRequest refund) {
		return repo.save(refund);
	}
	
	public List<RefundRequest> getAllRefundRequest()
	{
		return repo.findAll();
	}

	public RefundRequest updateStatus(Long id, String newStatus) {
	        Optional<RefundRequest> optionalRefundRequest = repo.findById(id);

	        if (optionalRefundRequest.isPresent()) {
	            RefundRequest refundRequest = optionalRefundRequest.get();
	            refundRequest.setStatus(newStatus); // Update the status
	            return repo.save(refundRequest); // Save updated entity
	        } else {
	            throw new IllegalArgumentException("RefundRequest with ID " + id + " not found");
	        }
	    }
	}
	
