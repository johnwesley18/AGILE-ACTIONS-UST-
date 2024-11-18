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

import com.capstone.ReviewingSection.model.RaiseTicket;
import com.capstone.ReviewingSection.model.ReworkRequest;
import com.capstone.ReviewingSection.services.RaiseService;
import com.capstone.ReviewingSection.services.ReworkService;


@RestController
@RequestMapping("/raise")
@CrossOrigin
public class RaiseController {
	@Autowired
	private RaiseService service;
	
	@GetMapping("/getAll")
	public List<RaiseTicket> getAll() {
		return service.getAllReworkRequest();
	}	
	
	 @PostMapping("/saveRequest")
	public RaiseTicket saveRequest(@RequestBody RaiseTicket refund) {
		return service.saveReworkRequest(refund);
	}
	 
	 @PutMapping("updatedRequest/{id}")
	 public RaiseTicket updateStatus(@PathVariable long id, @RequestParam String status  ) {
	 	return service.update(id,status);
	 }
}
