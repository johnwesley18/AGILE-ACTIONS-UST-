package com.ust.serviceplatform.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false)
  private Users user;

//  @ManyToOne
//  @JoinColumn(name = "professional_id", nullable = false)
//  private Professional professional;

  @ManyToOne
  @JoinColumn(name = "service_id", nullable = false)
  private Service service; // Add service relationship

  private Long rating;
  private String description;
}
