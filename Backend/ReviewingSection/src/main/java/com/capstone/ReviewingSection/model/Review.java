

package com.capstone.ReviewingSection.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long userId;
    private Long providerId;
    private int rating;
    private String reviewText;
    private boolean reported;
    private LocalDateTime timestamp;
}
