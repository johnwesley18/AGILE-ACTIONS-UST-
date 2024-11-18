package com.capstone.ReviewingSection.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.ReviewingSection.model.RaiseTicket;
import com.capstone.ReviewingSection.model.ReworkRequest;
import com.capstone.ReviewingSection.repository.RaiseRepository;
import com.capstone.ReviewingSection.repository.ReworkRepository;

@Service
public class RaiseService {

	@Autowired
	private RaiseRepository repo;
	
	public RaiseTicket saveReworkRequest(RaiseTicket rework) {
		return repo.save(rework);
	}
	
	public List<RaiseTicket> getAllReworkRequest()
	{
		return repo.findAll();
	}

	public RaiseTicket update(Long id, String status) {
	    Optional<RaiseTicket> optionalRequest = repo.findById(id);

	    if (optionalRequest.isEmpty()) {
	        throw new RuntimeException("Rework Request not found for ID: " + id);
	    }

	    // Update the action field
	    RaiseTicket request = optionalRequest.get();
	    request.setAction(status);

	    // Save the updated entity
	    return repo.save(request); // Returns the updated object
	}



}
