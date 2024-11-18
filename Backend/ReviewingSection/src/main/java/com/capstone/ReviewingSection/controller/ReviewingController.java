// src/main/java/com/capstone/ReviewingSection/controller/ReviewingController.java

package com.capstone.ReviewingSection.controller;

import com.capstone.ReviewingSection.model.Review;
import com.capstone.ReviewingSection.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin("http://localhost:4200")
public class ReviewingController {
    @Autowired
    private ReviewingService reviewingService;

    @PostMapping("/submit")
    public Review submitReview(@RequestBody Review review) {
        return reviewingService.saveReview(review);
    }

    @GetMapping("/provider/{providerId}")
    public List<Review> getProviderReviews(@PathVariable Long providerId) {
        return reviewingService.getReviewsByProvider(providerId);
    }
    
    @GetMapping("/getAllReview")
    public List<Review> getAllReview() {
        return reviewingService.getAll();
    }
    
}
