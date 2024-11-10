

package com.capstone.ReviewingSection.repository;

import com.capstone.ReviewingSection.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByProviderId(Long providerId);
    List<Review> findByUserId(Long userId);
}
