package com.capstone.ReviewingSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.ReviewingSection.model.ReportIssues;

public interface ReportRepository extends JpaRepository<ReportIssues, Long> {

}
