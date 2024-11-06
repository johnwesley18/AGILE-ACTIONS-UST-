package com.serviceharbor.auth.controller;

import com.serviceharbor.auth.model.Booking;
import com.serviceharbor.auth.service.BookingService;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

	@Autowired
    private BookingService bookingService;

    // Endpoint to create a new booking
    @PostMapping("/create")
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking,
            @RequestParam String userEmail,
            @RequestParam String serviceName,
            @RequestParam String slot,
            @RequestParam double amountPaid) {

        Booking savedBooking = bookingService.saveBooking(booking, userEmail, serviceName, slot, amountPaid);
        return ResponseEntity.ok(savedBooking);
    }

    // Endpoint to retrieve all bookings
    @GetMapping("/all")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Endpoint to get a booking by ID
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint to update a booking
    @PutMapping("/update/{id}")
    public ResponseEntity<Booking> updateBooking(
            @PathVariable Long id,
            @RequestBody Booking updatedBooking) {

        Optional<Booking> booking = bookingService.updateBooking(id, updatedBooking);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint to delete a booking
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        boolean deleted = bookingService.deleteBooking(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
