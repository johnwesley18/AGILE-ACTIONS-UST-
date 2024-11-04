package com.ust.serviceplatform.repository;

import com.ust.serviceplatform.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
  /*@Query("SELECT r FROM Review r WHERE r.service.id = :serviceId")*/
  List<Review> findByServiceId(Long serviceId);

}
