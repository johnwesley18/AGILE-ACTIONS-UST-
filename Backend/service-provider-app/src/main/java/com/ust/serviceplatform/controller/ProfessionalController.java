package com.ust.serviceplatform.controller;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/*import org.springframework.security.access.prepost.PreAuthorize;*/
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.serviceplatform.model.Professional;
import com.ust.serviceplatform.repository.ProfessionalRepository;
import com.ust.serviceplatform.service.ProfessionalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/professionals")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ProfessionalController {

  private final ProfessionalService professionalService;
  
  private final ProfessionalRepository professionalRepository;

  @PostMapping("/register/{userId}")
/*
  @PreAuthorize("hasRole('USER')")  // Only users can become service providers
*/
  public Professional registerAsProfessional(
    @PathVariable Long userId,
    @RequestBody Professional professionalDetails) {
    return professionalService.registerAsProfessional(userId,professionalDetails,professionalDetails.getLocation());
  }

  @GetMapping
  public List<Professional> getAllProfessionals(){
	  return professionalRepository.findAll();
  }
  
  @GetMapping("/{userId}")
  public  Professional getProfessionalByUserId(@PathVariable long userId){
    return  professionalService.getProfessionalByUserId(userId);
  }

  @PutMapping("/{professionalId}/schedule")
/*
  @PreAuthorize("hasRole('SERVICE_PROVIDER')")
*/
  public void updateSchedule(
    @PathVariable Long professionalId,
    @RequestBody Set<LocalDateTime> availableSlots) {
    professionalService.updateProfessionalSchedule(professionalId, availableSlots);
  }
}

