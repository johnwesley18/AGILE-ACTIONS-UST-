package com.ust.serviceplatform.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
/*
import org.springframework.security.access.prepost.PreAuthorize;
*/
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.serviceplatform.client.MailClient;
import com.ust.serviceplatform.client.PaymentClient;
import com.ust.serviceplatform.model.Booking;
import com.ust.serviceplatform.model.Mail;
import com.ust.serviceplatform.pojo.TransactionPojo;
import com.ust.serviceplatform.repository.ServiceRepository;
import com.ust.serviceplatform.repository.UserRepository;
import com.ust.serviceplatform.service.BookingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/bookings")

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

  private final BookingService bookingService;
  
  @Autowired
  private UserRepository userRepository;
  
  @Autowired
  private ServiceRepository serviceRepository;
  
  @Autowired
  private PaymentClient paymentClient;
  
  @Autowired
  private MailClient mailClient;

/*
  @PreAuthorize("hasRole('USER')")
*/
  @GetMapping
  public List<Booking> getAllBookings() {
    return bookingService.getAllBookings();
  }

/*
  @PreAuthorize("hasRole('USER')")
*/
  @PostMapping
  public ResponseEntity<?> saveBooking(@RequestBody Booking booking) throws Exception {
	  System.out.println(booking);
	  Booking order = bookingService.saveBooking(booking);
      TransactionPojo pojo=new TransactionPojo();
      pojo.setAmount((double)order.getPrice()*100);
      pojo.setUserId(order.getUserId());
      TransactionPojo transaction=paymentClient.createNewTransaction(pojo);
      Map<String,Object> objects=new HashMap<>();
      objects.put("order", order);
      objects.put("transaction", transaction);
      Mail mailObject=new Mail();
      mailObject.setAmountPaid(order.getPrice());
//      mailObject.setSlot(order.getBookingTime());
//      mailObject.setTime(order.getBookingTime());
//      mailObject.setServiceName(serviceRepository.findById(order.getServiceId()).get().getTitle());
      mailObject.setUserEmail(userRepository.findById(order.getUserId()).get().getUsername());
      mailClient.sendBookingConfirmation(mailObject);
    return ResponseEntity.ok(objects);
  }
  @GetMapping("/user/{userId}")
  public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable Long userId) {
    List<Booking> bookings = bookingService.getBookingsByUserId(userId);
    return ResponseEntity.ok(bookings);
  }
  @GetMapping("/{professionalId}")
  public ResponseEntity<List<Booking>> getBookingByProfessionalId(@PathVariable Long professionalId){
    List<Booking> bookings = bookingService.getBookingsByProfessionalId(professionalId);
    return ResponseEntity.ok(bookings);
  }
}
