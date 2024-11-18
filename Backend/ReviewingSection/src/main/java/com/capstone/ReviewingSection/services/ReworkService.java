package com.capstone.ReviewingSection.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.ReviewingSection.model.RefundRequest;
import com.capstone.ReviewingSection.model.ReworkRequest;
import com.capstone.ReviewingSection.repository.RefundRepository;
import com.capstone.ReviewingSection.repository.ReworkRepository;

@Service
public class ReworkService {

	@Autowired
	private ReworkRepository repo;
	
	public ReworkRequest saveReworkRequest(ReworkRequest rework) {
		return repo.save(rework);
	}
	
	public List<ReworkRequest> getAllReworkRequest()
	{
		return repo.findAll();
	}

	public ReworkRequest update(Long id, String status) {
	    Optional<ReworkRequest> optionalRequest = repo.findById(id);

	    if (optionalRequest.isEmpty()) {
	        throw new RuntimeException("Rework Request not found for ID: " + id);
	    }

	    // Update the action field
	    ReworkRequest request = optionalRequest.get();
	    request.setAction(status);

	    // Save the updated entity
	    return repo.save(request); // Returns the updated object
	}


	
	}




