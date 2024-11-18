package com.capstone.ReviewingSection.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.ReviewingSection.model.ReportIssues;
import com.capstone.ReviewingSection.repository.ReportRepository;
@Service
public class ReportService {

	@Autowired
	private ReportRepository repo;
	
	public ReportIssues saveReworkRequest(ReportIssues rework) {
		return repo.save(rework);
	}
	
	public List<ReportIssues> getAllReworkRequest()
	{
		return repo.findAll();
	}

	public ReportIssues update(Long id, String status) {
	    Optional<ReportIssues> optionalRequest = repo.findById(id);

	    if (optionalRequest.isEmpty()) {
	        throw new RuntimeException("Rework Request not found for ID: " + id);
	    }

	    // Update the action field
	    ReportIssues request = optionalRequest.get();
	    request.setAction(status);

	    // Save the updated entity
	    return repo.save(request); // Returns the updated object
	}



}
