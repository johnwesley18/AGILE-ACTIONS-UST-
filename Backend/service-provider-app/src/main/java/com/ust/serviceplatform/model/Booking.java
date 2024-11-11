package com.ust.serviceplatform.model;



import lombok.Data;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Booking {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private Long userId;

  private Long serviceProviderId;


  private LocalDate bookingTime;

  private String description;

  private   String address;

  private Long price;

  private long serviceId;
  
  //orderId of Payment 
  private String orderId;
  
//  @PrePersist
//  public void updateDate() {
//	  this.bookingTime=LocalDate.now();
//  }

}
