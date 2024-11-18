package com.capstone.ReviewingSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.ReviewingSection.model.RaiseTicket;

public interface RaiseRepository extends JpaRepository<RaiseTicket, Long> {

}
