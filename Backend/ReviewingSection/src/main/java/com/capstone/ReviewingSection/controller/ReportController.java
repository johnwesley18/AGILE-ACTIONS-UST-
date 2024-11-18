package com.capstone.ReviewingSection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.ReviewingSection.model.ReportIssues;
import com.capstone.ReviewingSection.model.ReworkRequest;
import com.capstone.ReviewingSection.services.ReportService;
import com.capstone.ReviewingSection.services.ReworkService;


@RestController
@RequestMapping("/report")
@CrossOrigin
public class ReportController {
	@Autowired
	private ReportService service;
	
	@GetMapping("/getAll")
	public List<ReportIssues> getAll() {
		return service.getAllReworkRequest();
	}	
	
	 @PostMapping("/saveRequest")
	public ReportIssues saveRequest(@RequestBody ReportIssues refund) {
		return service.saveReworkRequest(refund);
	}
	 
	 @PutMapping("updatedRequest/{id}")
	 public ReportIssues updateStatus(@PathVariable long id, @RequestParam String status  ) {
	 	return service.update(id,status);
	 }
}
