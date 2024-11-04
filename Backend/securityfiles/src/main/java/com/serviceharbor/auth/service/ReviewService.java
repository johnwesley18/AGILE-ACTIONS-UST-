package com.serviceharbor.auth.service;

import com.serviceharbor.auth.dtos.ReviewDTO;
import com.serviceharbor.auth.model.Review;
import com.serviceharbor.auth.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {
  private final ReviewRepository reviewRepository;

  public ReviewService(ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  public Review createReview(Review review) {
    return reviewRepository.save(review);
  }

  public List<ReviewDTO> getAllReviews() {
    return reviewRepository.findAll().stream()
      .map(this::convertToDTO)
      .collect(Collectors.toList());
  }

  public ReviewDTO getReviewById(Long id) {
    Review review = reviewRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Review not found"));
    return convertToDTO(review);
  }

  public ReviewDTO updateReview(Long id, Review review) {
    Review existingReview = reviewRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Review not found"));

    existingReview.setRating(review.getRating());
    existingReview.setDescription(review.getDescription());
    existingReview.setService(review.getService());

    Review savedReview = reviewRepository.save(existingReview);
    return convertToDTO(savedReview);
  }
  public void deleteReview(Long id) {
    reviewRepository.deleteById(id);
  }

  private ReviewDTO convertToDTO(Review review) {
    return new ReviewDTO(
      review.getId(),
      review.getUser().getId(),
      review.getUser().getUsername(),
      review.getProfessional().getId(),
      review.getService().getId(),
      review.getRating(),
      review.getDescription()
    );
  }
}
