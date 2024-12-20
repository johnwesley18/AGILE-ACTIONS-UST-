package com.ust.serviceplatform.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ReviewDTO {
  private Long reviewId;
  private Long userId;
  private String username; // Assuming you want to include username
  private Long serviceId;
  private Long rating;
  private String description;
}
