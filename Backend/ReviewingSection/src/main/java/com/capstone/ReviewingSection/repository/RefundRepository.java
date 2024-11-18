package com.capstone.ReviewingSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.ReviewingSection.model.RefundRequest;

public interface RefundRepository extends JpaRepository<RefundRequest,Long> {
	

}
