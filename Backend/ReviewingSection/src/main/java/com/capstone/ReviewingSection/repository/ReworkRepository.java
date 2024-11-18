package com.capstone.ReviewingSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.ReviewingSection.model.ReworkRequest;

public interface ReworkRepository extends JpaRepository<ReworkRequest, Long>{

}
